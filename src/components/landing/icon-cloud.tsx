'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  color: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Design',
    description: 'Wireframes & prototypes in Figma',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Develop',
    description: 'Full-stack with React, Next.js, Node.js, Express & databases',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Test',
    description: 'Quality assurance & testing',
    color: 'from-green-500 to-emerald-500',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'CI/CD pipelines to production',
    color: 'from-orange-500 to-red-500',
  },
];

// Design Preview Component
const DesignPreview = () => {
  return (
    <div className="space-y-6 p-8">
      {/* Design Flow Illustration */}
      <div className="space-y-4">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Design Process
        </p>

        <div className="space-y-3">
          {/* Wireframe */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500" />
            <div className="ml-4 p-4 rounded-lg border-2 border-dashed border-blue-500/40 bg-blue-500/5">
              <p className="text-sm font-semibold text-blue-500">Wireframe</p>
              <p className="text-xs text-muted-foreground mt-1">
                Structure & layout
              </p>
            </div>
          </motion.div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-muted-foreground/40"
            >
              <path
                d="M12 5v14m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500" />
            <div className="ml-4 p-4 rounded-lg border-2 border-purple-500/40 bg-purple-500/5">
              <p className="text-sm font-semibold text-purple-500">
                High-fidelity mockup
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Colors & typography
              </p>
            </div>
          </motion.div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-muted-foreground/40"
            >
              <path
                d="M12 5v14m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Prototype */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500" />
            <div className="ml-4 p-4 rounded-lg border-2 border-green-500/40 bg-green-500/5">
              <p className="text-sm font-semibold text-green-500">
                Interactive prototype
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                User testing ready
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Code Snippet Component 
const CodeSnippet = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'route.ts', lang: 'TypeScript' },
    { name: 'component.tsx', lang: 'React' },
  ];

  const code: string[] = [
    'export async function GET() {',
    '  const data = await db.query();',
    '  return Response.json({',
    '    success: true,',
    '    data',
    '  });',
    '}',
  ];

  const code2: string[] = [
    'export default function App() {',
    '  return (',
    '    <div className="app">',
    '      <Header />',
    '      <Main />',
    '    </div>',
    '  );',
    '}',
  ];

  const currentCode = activeTab === 0 ? code : code2;

  return (
    <div className="w-full p-8 space-y-4">
      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === i
                ? 'bg-foreground/10 text-foreground'
                : 'text-muted-foreground hover:bg-foreground/8'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="rounded-xl border border-border/50 overflow-hidden bg-neutral-950">
        <div className="px-4 py-3 bg-neutral-900 border-b border-border/30 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-400">
            {tabs[activeTab].lang}
          </span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
        </div>

        <div className="p-4 font-mono text-sm space-y-1 min-h-[220px]">
          {currentCode.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className="text-sky-200"
            >
              {line}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Test Dashboard Component
const TestDashboard = () => {
  const [coverage, setCoverage] = useState(0);
  const [tests, setTests] = useState(0);

  useEffect(() => {
    const coverageTimer = setInterval(() => {
      setCoverage((prev) => (prev < 94 ? prev + 2 : 94));
    }, 30);

    const testsTimer = setInterval(() => {
      setTests((prev) => (prev < 24 ? prev + 1 : 24));
    }, 50);

    return () => {
      clearInterval(coverageTimer);
      clearInterval(testsTimer);
    };
  }, []);

  return (
    <div className="space-y-6 p-8">
      {/* Coverage Circle */}
      <div className="flex justify-center">
        <div className="relative w-36 h-36">
          <svg className="transform -rotate-90 w-36 h-36">
            <circle
              cx="72"
              cy="72"
              r="60"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-muted/20"
            />
            <motion.circle
              cx="72"
              cy="72"
              r="60"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              className="text-green-500"
              initial={{
                strokeDasharray: '376.99 376.99',
                strokeDashoffset: 376.99,
              }}
              animate={{
                strokeDashoffset: 376.99 - (376.99 * coverage) / 100,
              }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{coverage}%</span>
            <span className="text-xs text-muted-foreground mt-1">Coverage</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <motion.div
          className="p-4 rounded-xl bg-green-500/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-2xl font-bold text-green-600">{tests}</p>
          <p className="text-xs text-muted-foreground mt-1">Passed</p>
        </motion.div>

        <motion.div
          className="p-4 rounded-xl bg-red-500/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-2xl font-bold text-red-600">0</p>
          <p className="text-xs text-muted-foreground mt-1">Failed</p>
        </motion.div>

        <motion.div
          className="p-4 rounded-xl bg-blue-500/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl font-bold text-blue-600">{coverage}%</p>
          <p className="text-xs text-muted-foreground mt-1">Cover</p>
        </motion.div>
      </div>

      {/* Test List */}
      <div className="space-y-2">
        {[
          'Component renders correctly',
          'API endpoints working',
          'Integration tests passed',
        ].map((test, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          >
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm">{test}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Deploy Pipeline Component
const DeployPipeline = () => {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      name: 'Build',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
        </svg>
      ),
    },
    {
      name: 'Test',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
    {
      name: 'Deploy',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev < stages.length ? prev + 1 : prev));
    }, 1000);

    return () => clearInterval(timer);
 }, [stages.length]);


  return (
    <div className="space-y-4 p-8">
      {/* Pipeline Stages */}
      {stages.map((s, i) => (
        <motion.div
          key={i}
          className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
            stage > i
              ? 'bg-green-500/10'
              : stage === i
                ? 'bg-orange-500/10'
                : 'bg-muted/30'
          }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <motion.div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              stage > i
                ? 'bg-green-500'
                : stage === i
                  ? 'bg-orange-500'
                  : 'bg-muted'
            } text-white`}
            animate={stage === i ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 1, repeat: stage === i ? Infinity : 0 }}
          >
            {s.icon}
          </motion.div>
          <div className="flex-1">
            <p className="font-semibold">{s.name}</p>
            <p className="text-xs text-muted-foreground">
              {stage > i
                ? 'Completed ✓'
                : stage === i
                  ? 'In progress...'
                  : 'Waiting'}
            </p>
          </div>
          {stage > i && (
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          )}
        </motion.div>
      ))}

      {/* Success Message */}
      {stage >= stages.length && (
        <motion.div
          className="p-4 bg-green-500/10 rounded-xl border border-green-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-green-600">
                Deployed successfully
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                keshavcodes.in
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Main Component
export default function Icon() {
  const [activeStep, setActiveStep] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleStepClick = (index: number) => {
    setActiveStep(index);

    // Only scroll on mobile screens
    if (
      typeof window !== 'undefined' &&
      window.innerWidth < 1024 &&
      previewRef.current
    ) {
      // Small timeout to allow state update and animation to start
      setTimeout(() => {
        previewRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }, 100);
    }
  };

  const renderPreview = () => {
    switch (activeStep) {
      case 0:
        return <DesignPreview />;
      case 1:
        return <CodeSnippet />;
      case 2:
        return <TestDashboard />;
      case 3:
        return <DeployPipeline />;
      default:
        return null;
    }
  };

  return (
    <Container className="mt-15">
      <SectionHeading subHeading="Development" heading="Process" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start py-0 mt-8">
        {/* Workflow Steps with Straight Line */}
        <div className="relative space-y-4">
          {/* Straight vertical line  */}
          <div className="pointer-events-none absolute left-[48px] top-[30px] bottom-[24px] w-px bg-gradient-to-b from-blue-500/40 via-*purple-500/40 via-green-500/40 to-orange-500/40" />

          {workflowSteps.map((step, index) => (
            <motion.button
              key={index}
              onClick={() => handleStepClick(index)}
              className={`relative w-full cursor-pointer text-left transition-all duration-300 rounded-2xl px-6 py-4 flex items-center gap-4 border ${
                activeStep === index
                  ? 'bg-muted/70 border-border/70 shadow-sm'
                  : 'border-transparent hover:bg-muted/40 hover:border-border/40'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Number Circle */}
              <div
                className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                  activeStep === index
                    ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                    : 'bg-background border border-border/60 text-muted-foreground'
                }`}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold mb-1 tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed tracking-tight">
                  {step.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Interactive Preview */}
        <div className="lg:sticky lg:top-24" ref={previewRef}>
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border-3 border-border/80 overflow-hidden"
          >
            {renderPreview()}
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
