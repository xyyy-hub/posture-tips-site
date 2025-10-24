import ReadingProgress from '../../components/ReadingProgress'
import Breadcrumbs from '../../components/Breadcrumbs'
import SimpleAuthor from '../../components/SimpleAuthor'
import ShortAnswer from '../../components/ShortAnswer'
import KeyTakeaways from '../../components/KeyTakeaways'
import FAQSection from '../../components/FAQSection'
import RelatedArticles from '../../components/RelatedArticles'

export const metadata = {
  title: 'Desk Ergonomics Setup Guide: Create the Perfect Workspace',
  description: 'Set up your desk for perfect ergonomics with this step-by-step guide. Covers chair height, monitor positioning, keyboard placement, and more.',
  alternates: {
    canonical: '/desk-ergonomics-guide'
  },
  openGraph: {
    title: 'Desk Ergonomics Setup Guide: Create the Perfect Workspace',
    description: 'Complete step-by-step desk ergonomics setup guide.',
    url: 'https://www.posturetips.com/desk-ergonomics-guide',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/' },
  { label: 'Desk Ergonomics Guide' }
]

const keyTakeaways = [
  "Proper ergonomic setup takes 20 minutes but prevents years of pain",
  "Monitor height is the #1 mistake—most people set it too low",
  "The 90-90-90 rule (ankles, knees, elbows) guides all adjustments"
]

const faqData = [
  {
    question: "What is the correct monitor height?",
    answer: "Top of monitor should be at or slightly below eye level (1-2 inches below). You should look slightly downward (10-20 degrees) at the center of the screen. This prevents neck strain from looking up or down all day."
  },
  {
    question: "How far should my monitor be from my eyes?",
    answer: "About arm's length away (20-28 inches). Extend your arm—fingertips should just touch the screen. If text is too small at this distance, increase font size rather than moving monitor closer."
  },
  {
    question: "What is the proper desk height?",
    answer: "When sitting with feet flat and proper posture, your elbows should be at 90 degrees when hands rest on keyboard. Most standard desks (29-30 inches) work for people 5'8\"-6'2\". Shorter or taller people may need adjustable desk or keyboard tray."
  },
  {
    question: "Do I need an ergonomic keyboard?",
    answer: "Not necessarily. Standard keyboards work fine if positioned correctly (close to body, wrists neutral). Ergonomic split keyboards help if you have wrist pain or very wide shoulders. Focus on positioning before buying special equipment."
  },
  {
    question: "Should I use a document holder?",
    answer: "Yes, if you type from paper documents regularly. Place document holder between monitor and keyboard at same height as monitor. This prevents constant neck rotation between document and screen."
  },
  {
    question: "How can I improve ergonomics with a laptop?",
    answer: "Use laptop stand to raise screen to eye level, plus external keyboard and mouse. You cannot achieve proper monitor height and keyboard position simultaneously with laptop alone. This setup is essential for full-time laptop work."
  },
  {
    question: "What chair height is best?",
    answer: "Adjust so feet rest flat on floor (or footrest), knees at 90 degrees slightly lower than hips, and elbows at 90 degrees when typing. If this makes feet dangle, use footrest. Chair height depends on both desk height and your leg length."
  },
  {
    question: "Do I need a standing desk?",
    answer: "Not essential, but helpful if you alternate sitting and standing every 30-60 minutes. Pure standing isn't better than pure sitting—variety is key. Many people benefit more from proper sitting setup and regular breaks than from standing desk."
  }
]

const relatedArticles = [
  {
    title: 'Sitting Posture Guide',
    description: 'Complete guide to proper sitting position.',
    href: '/sitting-posture-guide'
  },
  {
    title: 'Office Worker Tips',
    description: '15 quick tips for better desk posture.',
    href: '/tips/office-workers'
  },
  {
    title: 'Daily Posture Routine',
    description: 'Exercises to counteract desk work.',
    href: '/daily-posture-routine'
  }
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.posturetips.com/desk-ergonomics-guide#article",
      "headline": "Desk Ergonomics Setup Guide: Create the Perfect Workspace",
      "description": "Set up your desk for perfect ergonomics with this step-by-step guide. Covers chair height, monitor positioning, keyboard placement, and more.",
      "author": {
        "@type": "Organization",
        "name": "PostureTips.com",
        "url": "https://www.posturetips.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PostureTips.com",
        "url": "https://www.posturetips.com"
      },
      "datePublished": "2025-10-24",
      "dateModified": "2025-10-24",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.posturetips.com/desk-ergonomics-guide"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.posturetips.com/desk-ergonomics-guide#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.posturetips.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Guides",
          "item": "https://www.posturetips.com"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Desk Ergonomics Guide"
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://www.posturetips.com/desk-ergonomics-guide#howto",
      "name": "How to Set Up Your Desk Ergonomically",
      "description": "Step-by-step guide to creating the perfect ergonomic workspace.",
      "totalTime": "PT20M",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Adjust Your Chair",
          "text": "Set seat height so feet rest flat with knees at 90 degrees. Adjust lumbar support to fit lower back curve. Set armrests so elbows rest lightly with shoulders relaxed."
        },
        {
          "@type": "HowToStep",
          "name": "Position Your Monitor",
          "text": "Place monitor at arm's length (20-28 inches). Top of monitor should be at or slightly below eye level. Center monitor directly in front of you, not off to the side."
        },
        {
          "@type": "HowToStep",
          "name": "Set Up Keyboard and Mouse",
          "text": "Place keyboard directly in front of you, close to body edge. Keep mouse right next to keyboard at same height. Elbows should be at 90 degrees with wrists straight."
        },
        {
          "@type": "HowToStep",
          "name": "Verify the 90-90-90 Rule",
          "text": "Check that ankles, knees, and elbows all form 90-degree angles. Adjust as needed to achieve neutral position."
        },
        {
          "@type": "HowToStep",
          "name": "Test and Fine-Tune",
          "text": "Work for 30 minutes and notice any discomfort. Make small adjustments until everything feels comfortable and sustainable."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.posturetips.com/desk-ergonomics-guide#faq",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
}

export default function DeskErgonomicsGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <ReadingProgress />

      <article className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <Breadcrumbs items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Desk Ergonomics Setup Guide
            </h1>
            
            <SimpleAuthor 
              authorName="PostureTips Team"
              authorTitle="Ergonomics Consultants"
              lastUpdated="2025-10-24"
            />
          </header>

          <ShortAnswer>
            Proper desk ergonomics has your monitor at eye level, keyboard and mouse close to your body, chair supporting your lower back, and feet flat on the floor. This neutral position reduces strain on your neck, shoulders, and back during long work sessions.
          </ShortAnswer>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="font-semibold text-blue-900 mb-2">
              Need Clinical Treatment for Desk-Related Pain?
            </h3>
            <p className="text-blue-800 mb-3">
              If proper desk ergonomics haven't resolved your neck pain or you've developed a visible neck hump from prolonged desk work, you may need targeted clinical treatment. See our specialized desk worker guide.
            </p>
            <a 
              href="https://www.neckhump.com/desk-setup-guide" 
              className="text-blue-600 font-medium hover:underline"
              target="_blank"
              rel="noopener"
            >
              View Clinical Desk Setup Guide at NeckHump.com →
            </a>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <div className="prose prose-lg max-w-none">
            
            <p className="text-lg">
              Proper ergonomic setup is a 20-minute investment that prevents years of pain. Follow this step-by-step guide to transform your workspace.
            </p>

            <h2>Step 1: Adjust Your Chair First</h2>
            <p>
              Start with your chair—it's the foundation of everything else. For detailed sitting position guidance, see our <a href="/sitting-posture-guide" className="text-primary-600 hover:underline">complete sitting posture guide</a>.
            </p>

            <h3>Seat Height</h3>
            <ol>
              <li>Sit all the way back in your chair</li>
              <li>Place feet flat on floor</li>
              <li>Adjust height until knees form 90-degree angle</li>
              <li>Knees should be slightly lower than hips</li>
              <li>If feet don't reach floor, note that you'll need a footrest</li>
            </ol>

            <h3>Seat Depth</h3>
            <p>
              There should be 2-4 finger widths of space between seat edge and back of your knees. Adjust seat pan forward or back if your chair has this feature.
            </p>

            <h3>Lumbar Support</h3>
            <p>
              Adjust lumbar support (curved pad on backrest) to fit snugly into curve of your lower back, about waist height. You should feel gentle pressure supporting your natural curve.
            </p>

            <h3>Armrests</h3>
            <p>
              Set so elbows rest lightly with shoulders relaxed (not elevated). Forearms should be parallel to floor. If armrests force shoulders up or push elbows too wide, remove them.
            </p>

            <h2>Step 2: Position Your Monitor</h2>
            <p>
              Monitor positioning is the #1 ergonomic mistake. Most people set monitors too low, which is a major cause of <a href="/phone-posture-tips" className="text-primary-600 hover:underline">forward head posture</a>.
            </p>

            <h3>Height</h3>
            <ul>
              <li>Top of screen at or slightly below eye level (1-2 inches below)</li>
              <li>Looking at center of screen, your gaze should be slightly downward (10-20 degrees)</li>
              <li>Use monitor stand, laptop riser, or stack of books to achieve this</li>
            </ul>

            <h3>Distance</h3>
            <ul>
              <li>Arm's length away (20-28 inches)</li>
              <li>Extend your arm—fingertips should just touch screen</li>
              <li>If text is too small, increase font size, don't move closer</li>
            </ul>

            <h3>Angle</h3>
            <ul>
              <li>Tilt monitor back 10-20 degrees</li>
              <li>Should face you directly, not angled to side</li>
              <li>Adjust screen brightness to match room lighting</li>
            </ul>

            <h3>Multiple Monitors</h3>
            <p>
              <strong>Two monitors:</strong> Place most-used monitor directly in front, second at 30-degree angle to side. If using equally, arrange in shallow V-shape.<br/>
              <strong>Three+ monitors:</strong> Main monitor center at eye level, others flanking at 30-45 degree angles.
            </p>

            <h2>Step 3: Position Keyboard and Mouse</h2>
            
            <h3>Keyboard Placement</h3>
            <ul>
              <li>Directly in front of you (centered on your body)</li>
              <li>Close enough that elbows stay at 90 degrees</li>
              <li>4-6 inches from desk edge (room for wrists to rest during breaks)</li>
              <li>Upper arms should hang naturally at sides, not reaching forward</li>
            </ul>

            <h3>Mouse Placement</h3>
            <ul>
              <li>At same level as keyboard</li>
              <li>Close to keyboard (no reaching to side)</li>
              <li>Consider switching mouse side occasionally to balance muscle use</li>
            </ul>

            <h3>Wrist Position</h3>
            <p>
              Keep wrists neutral (straight) while typing—not bent up, down, or to sides. Wrist rests are for breaks, not active typing. During typing, wrists should float slightly above keyboard.
            </p>

            <h2>Step 4: Optimize Desk Height</h2>
            <p>
              With chair adjusted and feet flat, your elbows should be at 90 degrees when hands rest on keyboard.
            </p>

            <p>
              <strong>If desk is too high:</strong> Raise chair and use footrest so feet don't dangle<br/>
              <strong>If desk is too low:</strong> Use desk risers or keyboard tray to bring work surface to proper height<br/>
              <strong>Perfect height:</strong> Standard 29-30 inch desks work for most people 5'8\"-6'2\"
            </p>

            <h2>Step 5: Lighting and Glare Reduction</h2>

            <h3>Screen Glare</h3>
            <ul>
              <li>Position monitor perpendicular to windows (not facing or backing window)</li>
              <li>Use blinds or curtains to control natural light</li>
              <li>Avoid overhead lights reflecting on screen</li>
              <li>Use desk lamp for task lighting instead of overhead lights</li>
            </ul>

            <h3>Room Lighting</h3>
            <ul>
              <li>Screen brightness should match room lighting (not much brighter or dimmer)</li>
              <li>Reduce overhead lighting if screen looks dim by comparison</li>
              <li>Use desk lamp positioned to side (not behind monitor creating glare)</li>
            </ul>

            <h2>Laptop Setup (Essential for Full-Time Work)</h2>
            <p>
              <strong>The problem:</strong> You cannot achieve proper monitor height (eye level) and proper keyboard position (elbows 90 degrees) simultaneously with laptop alone. This forces users into <a href="/phone-posture-tips" className="text-primary-600 hover:underline">text neck position</a>.
            </p>

            <h3>Required Equipment</h3>
            <ol>
              <li><strong>Laptop stand:</strong> Raises screen to eye level ($20-50)</li>
              <li><strong>External keyboard:</strong> Allows proper typing position ($20-100)</li>
              <li><strong>External mouse:</strong> Completes proper setup ($10-50)</li>
            </ol>

            <p>
              This $50-200 investment is non-negotiable for full-time laptop work. Without it, you're guaranteed neck and shoulder problems. <a href="/tips/office-workers" className="text-primary-600 hover:underline">Office workers</a> especially need this setup.
            </p>

            <h2>Final Ergonomic Checklist</h2>
            <p>
              Use this to verify your setup:
            </p>

            <ul>
              <li>□ Feet flat on floor or footrest</li>
              <li>□ Knees at 90 degrees, slightly lower than hips</li>
              <li>□ Sitting all the way back in chair</li>
              <li>□ Lumbar support fits curve of lower back</li>
              <li>□ Shoulders relaxed, not elevated</li>
              <li>□ Elbows at 90 degrees when typing</li>
              <li>□ Wrists neutral (straight), not bent</li>
              <li>□ Monitor top at or slightly below eye level</li>
              <li>□ Monitor arm's length away (20-28 inches)</li>
              <li>□ Keyboard directly in front, close to body</li>
              <li>□ Mouse at same level as keyboard</li>
              <li>□ No screen glare from windows or lights</li>
            </ul>

            <h2>What Results to Expect</h2>
            <p>
              <strong>Immediately:</strong> Setup may feel different, take 2-3 days to adjust<br/>
              <strong>Week 1:</strong> Less end-of-day neck and shoulder tension<br/>
              <strong>Week 2:</strong> Fewer headaches, more sustained energy<br/>
              <strong>Week 4:</strong> Significant reduction in pain, setup feels natural<br/>
              <strong>Long-term:</strong> Prevents chronic posture problems from developing
            </p>

            <p>
              Proper ergonomics is preventive medicine. A 20-minute setup now saves years of pain, thousands in healthcare costs, and countless hours of discomfort.
            </p>

          </div>

          <div id="faq" className="mt-12">
            <FAQSection faqs={faqData} />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

        </div>
      </article>
    </>
  )
}

