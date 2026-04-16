import React from 'react';
import { Check, Crown, Zap, Shield, X } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface PricingProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (plan: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ isOpen, onClose, onSubscribe }) => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Access to 500+ free movies',
        'Standard Quality (720p)',
        'Contains minimal ads',
        'Watch on 1 device'
      ],
      icon: Zap,
      color: 'gray',
      buttonText: 'Current Plan',
      disabled: true
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      features: [
        'Access to all movies & series',
        'Ultra HD Quality (4K)',
        'Zero advertisements',
        'Watch on 4 devices simultaneously',
        'Download to watch offline',
        'Early access to new releases'
      ],
      icon: Crown,
      color: 'purple',
      buttonText: 'Get Premium',
      recommended: true
    },
    {
      name: 'Family',
      price: '$14.99',
      period: '/month',
      features: [
        'Everything in Premium',
        'Up to 6 separate profiles',
        'Parental controls',
        'Exclusive family content'
      ],
      icon: Shield,
      color: 'cyan',
      buttonText: 'Get Family'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl bg-[#111] border-white/10 text-white p-0 overflow-hidden">
        <DialogHeader className="p-8 bg-gradient-to-br from-purple-900/20 to-black">
          <div className="flex justify-between items-center mb-4">
             <DialogTitle className="text-3xl font-black">CHOOSE YOUR PLAN</DialogTitle>
             <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
               <X className="w-6 h-6" />
             </button>
          </div>
          <p className="text-gray-400">Unlock a world of limitless entertainment without limits or ads.</p>
        </DialogHeader>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-6 rounded-2xl border ${plan.recommended ? 'border-purple-500 bg-purple-500/5' : 'border-white/10 bg-white/5'} transition-transform hover:scale-[1.02]`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${plan.color === 'purple' ? 'bg-purple-500' : plan.color === 'cyan' ? 'bg-cyan-500' : 'bg-gray-600'}`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.color === 'purple' ? 'text-purple-500' : plan.color === 'cyan' ? 'text-cyan-500' : 'text-gray-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => onSubscribe(plan.name)}
                disabled={plan.disabled}
                className={`w-full font-bold h-12 rounded-xl transition-all ${
                  plan.recommended 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-900/20' 
                    : plan.disabled 
                      ? 'bg-white/10 text-gray-500' 
                      : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="p-6 bg-white/5 text-center text-xs text-gray-500 border-t border-white/10">
          Cancel anytime. Prices shown in USD. Terms and conditions apply.
        </div>
      </DialogContent>
    </Dialog>
  );
};