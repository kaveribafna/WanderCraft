import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  FileText, 
  Code, 
  Copy, 
  Check, 
  Download, 
  Share2 
} from 'lucide-react';

export const ExportModal = ({ trip, onClose }) => {
  const [copied, setCopied] = useState(false);

  const generateMarkdown = () => {
    let md = `# Trip to ${trip.destination}\n\n`;
    md += `**Tagline:** ${trip.tagline}\n`;
    md += `**Dates:** ${trip.startDate} to ${trip.endDate} (${trip.totalDays} Days)\n`;
    md += `**Budget:** ${trip.currency} $${trip.budgetAmount.toLocaleString()} (${trip.partyType})\n`;
    md += `**Basecamp:** ${trip.stays[0]?.name} (${trip.stays[0]?.neighborhood})\n\n`;

    md += `## Day-by-Day Itinerary\n\n`;
    trip.itinerary.forEach(day => {
      md += `### Day ${day.dayNumber}: ${day.title} (${day.date})\n`;
      md += `*Theme: ${day.theme} | Walking: ~${day.estimatedWalkingKm} km*\n\n`;
      day.activities.forEach(act => {
        md += `- **[${act.timeSlot} · ${act.startTime}] ${act.title}**\n`;
        md += `  ${act.description}\n`;
        md += `  *Location:* ${act.location} | *Cost:* $${act.estimatedCost}\n`;
      });
      md += `\n`;
    });

    md += `## Must-Try Culinary Highlights\n\n`;
    trip.culinary.mustTryDishes.forEach(dish => {
      md += `- **${dish.name}** (${dish.origin}): ${dish.description} — *Best at: ${dish.bestSpot}*\n`;
    });

    md += `\n## Safety & Packing Checklist\n\n`;
    trip.sentinel.packingList.forEach(item => {
      md += `- [ ] ${item.item} (${item.category})\n`;
    });

    return md;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(trip, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `WanderAgents_${trip.destination.replace(/[^a-zA-Z0-9]/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-md p-4">
      <div className="w-full max-w-xl bg-white border border-stone-200 rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-5">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-extrabold text-stone-900 font-display">
              Export & Share Itinerary
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 transition-colors p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          
          <button
            onClick={handlePrint}
            className="w-full p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200 hover:border-amber-400 flex items-center justify-between text-left transition-all group cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform shadow-xs">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-900 block font-display">Print / Save as PDF</span>
                <span className="text-xs text-stone-500 font-medium">Clean print-optimized travel schedule & offline guide</span>
              </div>
            </div>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="w-full p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200 hover:border-amber-400 flex items-center justify-between text-left transition-all group cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:scale-105 transition-transform shadow-xs">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-900 block font-display">Copy as Markdown</span>
                <span className="text-xs text-stone-500 font-medium">Ready to paste into Notion, Obsidian, Apple Notes, or Email</span>
              </div>
            </div>
            {copied ? (
              <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Copied!
              </span>
            ) : (
              <Copy className="w-4 h-4 text-stone-400 group-hover:text-stone-600" />
            )}
          </button>

          <button
            onClick={handleDownloadJSON}
            className="w-full p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200 hover:border-amber-400 flex items-center justify-between text-left transition-all group cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform shadow-xs">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-900 block font-display">Download Raw JSON</span>
                <span className="text-xs text-stone-500 font-medium">Full structured multi-agent state data for developer integrations</span>
              </div>
            </div>
            <Download className="w-4 h-4 text-stone-400 group-hover:text-stone-600" />
          </button>

        </div>

        <div className="text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
