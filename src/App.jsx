import React, { useState, useEffect } from 'react';
import { SAMPLE_TRIPS } from './data/sampleTrips';
import { generateIntelligentFallbackTrip } from './services/tripGenerator';
import { HeroLanding } from './components/HeroLanding';
import { Navbar } from './components/Navbar';
import { TripOverview } from './components/TripOverview';
import { ItineraryView } from './components/ItineraryView';
import { RouteMapView } from './components/RouteMapView';
import { BudgetTracker } from './components/BudgetTracker';
import { StaysView } from './components/StaysView';
import { CulinaryView } from './components/CulinaryView';
import { SentinelView } from './components/SentinelView';
import { AgentRoom } from './components/AgentRoom';
import { AgentOrchestratorModal } from './components/AgentOrchestratorModal';
import { ExportModal } from './components/ExportModal';
import { AgentsModal } from './components/AgentsModal';
import { AboutModal } from './components/AboutModal';
import { TripForm } from './components/TripForm';

export const App = () => {
  const [currentTrip, setCurrentTrip] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [pendingInput, setPendingInput] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showAgentsModal, setShowAgentsModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showCustomFormModal, setShowCustomFormModal] = useState(false);

  useEffect(() => {
    document.title = 'WanderCraft';
  }, []);

  // Triggered when user enters criteria on Hero or Form
  const handlePlanTrip = (input) => {
    setPendingInput(input);
    setIsSynthesizing(true);
  };

  // Triggered when clicking a popular card or sample trip
  const handleSelectSample = (sampleId) => {
    const sample = SAMPLE_TRIPS.find(s => s.id === sampleId) || SAMPLE_TRIPS[0];
    setPendingInput({
      destination: sample.destination,
      budgetAmount: sample.budgetAmount,
      currency: sample.currency,
      startDate: sample.startDate,
      endDate: sample.endDate,
      partySize: sample.partySize,
      partyType: sample.partyType,
      travelStyle: sample.travelStyle,
      travelPace: sample.travelPace
    });
    setIsSynthesizing(true);
  };

  // Called when agent synthesis animation finishes
  const handleSynthesisComplete = async () => {
    if (!pendingInput) return;

    // Check if there is an exact sample match or synthesize
    const match = SAMPLE_TRIPS.find(
      s => s.destination.toLowerCase().includes(pendingInput.destination.toLowerCase().split(',')[0].trim())
    );

    if (match) {
      setCurrentTrip({
        ...match,
        budgetAmount: pendingInput.budgetAmount,
        currency: pendingInput.currency,
        partySize: pendingInput.partySize,
        partyType: pendingInput.partyType,
        travelStyle: pendingInput.travelStyle,
        travelPace: pendingInput.travelPace,
        startDate: pendingInput.startDate,
        endDate: pendingInput.endDate
      });
    } else {
      const generatedTrip = generateIntelligentFallbackTrip(pendingInput);
      setCurrentTrip(generatedTrip);
    }

    setIsSynthesizing(false);
    setActiveTab('itinerary');
  };

  const handleNewTrip = () => {
    setCurrentTrip(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onNewTrip={handleNewTrip}
        onOpenExport={() => setShowExportModal(true)}
        hasTrip={!!currentTrip}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {!currentTrip ? (
          // Landing View matching user photo
          <HeroLanding
            onPlanTrip={handlePlanTrip}
            onSelectSample={handleSelectSample}
            onOpenAgentsModal={() => setShowAgentsModal(true)}
            onOpenAboutModal={() => setShowAboutModal(true)}
          />
        ) : (
          // Active Trip Workspace View
          <div>
            {/* Trip Overview Header Banner */}
            <TripOverview
              trip={currentTrip}
              activeTab={activeTab}
              onSelectTab={setActiveTab}
            />

            {/* Active Tab View */}
            <main className="pb-16">
              {activeTab === 'itinerary' && (
                <ItineraryView
                  trip={currentTrip}
                  onUpdateTrip={setCurrentTrip}
                />
              )}

              {activeTab === 'map' && (
                <RouteMapView trip={currentTrip} />
              )}

              {activeTab === 'budget' && (
                <BudgetTracker
                  trip={currentTrip}
                  onUpdateTrip={setCurrentTrip}
                />
              )}

              {activeTab === 'stays' && (
                <StaysView
                  trip={currentTrip}
                  onUpdateTrip={setCurrentTrip}
                />
              )}

              {activeTab === 'culinary' && (
                <CulinaryView
                  trip={currentTrip}
                  onUpdateTrip={setCurrentTrip}
                />
              )}

              {activeTab === 'sentinel' && (
                <SentinelView
                  trip={currentTrip}
                  onUpdateTrip={setCurrentTrip}
                />
              )}

              {activeTab === 'agents' && (
                <AgentRoom
                  trip={currentTrip}
                  onUpdateTrip={setCurrentTrip}
                />
              )}
            </main>
          </div>
        )}
      </div>

      {/* Multi-Agent Synthesis Overlay Modal */}
      {isSynthesizing && pendingInput && (
        <AgentOrchestratorModal
          destination={pendingInput.destination}
          budgetAmount={pendingInput.budgetAmount}
          currency={pendingInput.currency}
          startDate={pendingInput.startDate}
          endDate={pendingInput.endDate}
          onComplete={handleSynthesisComplete}
        />
      )}

      {/* Modals */}
      {showExportModal && currentTrip && (
        <ExportModal
          trip={currentTrip}
          onClose={() => setShowExportModal(false)}
        />
      )}

      {showAgentsModal && (
        <AgentsModal onClose={() => setShowAgentsModal(false)} />
      )}

      {showAboutModal && (
        <AboutModal onClose={() => setShowAboutModal(false)} />
      )}

    </div>
  );
};

export default App;
