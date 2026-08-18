import React, { useState } from 'react';
import { 
  DollarSign, 
  PieChart, 
  TrendingDown, 
  Plus, 
  Trash2, 
  Lightbulb, 
  Coins, 
  ArrowRightLeft,
  CheckCircle,
  Hotel,
  Utensils,
  Ticket,
  Train,
  Shield
} from 'lucide-react';

const CATEGORY_ICONS = {
  Hotel: Hotel,
  Utensils: Utensils,
  Ticket: Ticket,
  Train: Train,
  Shield: Shield
};

export const BudgetTracker = ({
  trip,
  onUpdateTrip
}) => {
  const [expenseDesc, setExpenseDesc] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('stays');
  const [convertInput, setConvertInput] = useState(100);

  const customExpenses = trip.customExpenses || [];
  const totalCustomSpent = customExpenses.reduce((sum, e) => sum + e.amount, 0);
  const remainingBudget = trip.budget.totalBudget - totalCustomSpent;
  const spentPct = Math.min(100, Math.round((totalCustomSpent / trip.budget.totalBudget) * 100));

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expenseDesc.trim() || !expenseAmount || expenseAmount <= 0) return;

    const newExpense = {
      id: `exp-${Date.now()}`,
      categoryId: expenseCategory,
      description: expenseDesc.trim(),
      amount: Number(expenseAmount),
      date: new Date().toISOString().split('T')[0]
    };

    const updated = { ...trip };
    updated.customExpenses = [...(updated.customExpenses || []), newExpense];
    
    // Update category spentAmount
    const cat = updated.budget.categories.find(c => c.id === expenseCategory);
    if (cat) {
      cat.spentAmount = (cat.spentAmount || 0) + Number(expenseAmount);
    }

    onUpdateTrip(updated);
    setExpenseDesc('');
    setExpenseAmount('');
  };

  const handleDeleteExpense = (id) => {
    const updated = { ...trip };
    const exp = (updated.customExpenses || []).find(e => e.id === id);
    if (exp) {
      const cat = updated.budget.categories.find(c => c.id === exp.categoryId);
      if (cat) {
        cat.spentAmount = Math.max(0, (cat.spentAmount || 0) - exp.amount);
      }
    }
    updated.customExpenses = (updated.customExpenses || []).filter(e => e.id !== id);
    onUpdateTrip(updated);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      
      {/* Top Banner Stats from Ledger Agent */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold font-tech uppercase tracking-wider">
                Audited by Ledger Agent
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                Tier: {trip.budget.tier}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Budget Allocation & Financial Guardrails
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
              Estimated daily burn rate: <span className="text-amber-800 font-bold font-mono">${trip.budget.dailyAllowanceAverage}/day</span> across {trip.partySize} traveler(s).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-5 py-3 bg-[#FAF7F2] border border-stone-200 rounded-2xl text-right shadow-xs">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider font-tech font-bold block">Remaining Balance</span>
              <span className={`text-xl font-extrabold font-mono ${remainingBudget >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                {trip.currency} ${remainingBudget.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-600 font-mono font-bold">
            <span>Spent: ${totalCustomSpent.toLocaleString()} ({spentPct}%)</span>
            <span>Total Cap: ${trip.budget.totalBudget.toLocaleString()}</span>
          </div>
          <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden border border-stone-200">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                spentPct > 90 ? 'bg-rose-500' : spentPct > 70 ? 'bg-amber-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(100, spentPct)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Breakdown Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {trip.budget.categories.map(cat => {
          const Icon = CATEGORY_ICONS[cat.icon] || DollarSign;
          const catSpent = (trip.customExpenses || [])
            .filter(e => e.categoryId === cat.id)
            .reduce((sum, e) => sum + e.amount, 0);

          return (
            <div
              key={cat.id}
              className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-extrabold text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md">
                    {cat.percentage}%
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-stone-900 truncate font-display">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 font-medium">
                  {cat.notes}
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-stone-100">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-500 font-medium">Cap:</span>
                  <span className="font-bold text-stone-900">${cat.allocatedAmount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono mt-1">
                  <span className="text-stone-500 font-medium">Tracked:</span>
                  <span className="font-extrabold text-emerald-700">${catSpent.toLocaleString()}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Column Layout: Custom Expense Logger & Savings Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Real-time Expense Tracker */}
        <div className="lg:col-span-7 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-extrabold text-stone-900 font-display flex items-center gap-2">
              <Plus className="w-4 h-4 text-emerald-700" />
              <span>Log Actual Trip Expense</span>
            </h3>
            <span className="text-xs text-stone-500 font-mono">{customExpenses.length} entries</span>
          </div>

          {/* Form */}
          <form onSubmit={handleAddExpense} className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-5">
            <div className="sm:col-span-5">
              <input
                type="text"
                required
                value={expenseDesc}
                onChange={e => setExpenseDesc(e.target.value)}
                placeholder="Description (e.g. Dinner in Shibuya)"
                className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-xs font-medium focus:outline-hidden focus:border-amber-400"
              />
            </div>
            <div className="sm:col-span-3">
              <input
                type="number"
                required
                min="1"
                step="any"
                value={expenseAmount}
                onChange={e => setExpenseAmount(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Amount ($)"
                className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-xs font-mono font-bold focus:outline-hidden focus:border-amber-400"
              />
            </div>
            <div className="sm:col-span-2">
              <select
                value={expenseCategory}
                onChange={e => setExpenseCategory(e.target.value)}
                className="w-full px-2.5 py-2.5 bg-[#FAF7F2] border border-stone-200 rounded-xl text-stone-900 text-xs font-medium focus:outline-hidden focus:border-amber-400 cursor-pointer"
              >
                {trip.budget.categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name.split(' ')[0]}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                Add
              </button>
            </div>
          </form>

          {/* List of tracked expenses */}
          <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
            {customExpenses.length === 0 ? (
              <div className="text-center py-8 text-stone-500 text-xs border border-dashed border-stone-200 rounded-2xl bg-[#FAF7F2]">
                No custom expenses logged yet. Add your booked tickets or dining receipts here.
              </div>
            ) : (
              customExpenses.map(exp => (
                <div
                  key={exp.id}
                  className="flex items-center justify-between p-3.5 bg-[#FAF7F2] border border-stone-200 rounded-2xl text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-600 text-[10px] uppercase font-mono font-bold">
                      {exp.categoryId}
                    </span>
                    <span className="font-bold text-stone-900">{exp.description}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-extrabold text-emerald-700">
                      ${exp.amount.toLocaleString()}
                    </span>
                    <button
                      onClick={() => handleDeleteExpense(exp.id)}
                      className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer p-1"
                      title="Remove expense"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Ledger Savings Hacks & Currency Exchange */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Savings Tips Card */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 shadow-xs">
            <h3 className="text-sm font-extrabold text-stone-900 font-display flex items-center gap-2 mb-3.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Ledger's Cost Optimization Hacks</span>
            </h3>
            
            <div className="space-y-3">
              {trip.budget.savingsTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#FAF7F2] border border-stone-200 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-stone-900 font-display">{tip.title}</span>
                    <span className="text-xs font-mono font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Save ~${tip.savingsEstimate}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed font-medium">
                    {tip.tradeoff}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Currency Converter */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-stone-600 flex items-center gap-1.5 font-tech">
                <ArrowRightLeft className="w-4 h-4 text-sky-600" />
                <span>Exchange Rate Estimator</span>
              </span>
              <span className="text-[11px] font-mono font-semibold text-stone-500">
                1 USD = {trip.budget.exchangeRateToUSD} {trip.budget.localCurrencyCode}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={convertInput}
                onChange={e => setConvertInput(Number(e.target.value))}
                className="w-24 px-3 py-2 bg-[#FAF7F2] border border-stone-200 rounded-xl text-stone-900 text-xs font-mono font-bold"
              />
              <span className="text-xs text-stone-600 font-bold">USD =</span>
              <span className="text-xs font-mono font-extrabold text-amber-900 bg-amber-50 px-3.5 py-2 rounded-xl border border-amber-200">
                {(convertInput * trip.budget.exchangeRateToUSD).toLocaleString()} {trip.budget.localCurrencyCode}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
