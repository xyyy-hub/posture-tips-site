import ReadingProgress from '../../components/ReadingProgress'
import Breadcrumbs from '../../components/Breadcrumbs'
import SimpleAuthor from '../../components/SimpleAuthor'
import ShortAnswer from '../../components/ShortAnswer'
import KeyTakeaways from '../../components/KeyTakeaways'
import TableOfContents from '../../components/TableOfContents'
import FAQSection from '../../components/FAQSection'
import RelatedArticles from '../../components/RelatedArticles'
import NavigationPathway from '../../components/NavigationPathway'

export const metadata = {
  title: 'Perfect Sitting Posture for Desk Workers: Complete Setup Guide',
  description: 'Master proper sitting posture with this evidence-based guide for desk workers. Includes chair setup, monitor positioning, and break strategies.',
  alternates: {
    canonical: '/sitting-posture-guide'
  },
  openGraph: {
    title: 'Perfect Sitting Posture for Desk Workers: Complete Setup Guide',
    description: 'Master proper sitting posture with this evidence-based guide for desk workers.',
    url: 'https://www.posturetips.com/sitting-posture-guide',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/' },
  { label: 'Sitting Posture Guide' }
]

const tocSections = [
  { id: 'short-answer', title: 'Short Answer' },
  { id: 'key-takeaways', title: 'Key Takeaways' },
  { id: 'why-matters', title: 'Why Sitting Posture Matters' },
  { id: '90-90-90-rule', title: 'The 90-90-90 Rule' },
  { id: 'chair-setup', title: 'Step-by-Step Chair Setup' },
  { id: 'desk-monitor', title: 'Desk and Monitor Positioning' },
  { id: 'common-mistakes', title: 'Common Sitting Mistakes' },
  { id: 'movement-breaks', title: 'Movement Breaks Strategy' },
  { id: 'faq', title: 'Frequently Asked Questions' }
]

const keyTakeaways = [
  "Your chair and desk setup matter as much as your posture itself",
  "The '90-90-90 rule': 90-degree angles at ankles, knees, and elbows",
  "Sitting perfectly still is worse than moving—fidgeting is actually healthy",
  "Most people need a footrest, monitor riser, or both to achieve proper height",
  "Break frequency beats break length: five 2-minute breaks &gt; one 10-minute break"
]

const faqData = [
  {
    question: "What is the best sitting position?",
    answer: "The best sitting position has your feet flat on the floor (or footrest), knees at 90 degrees slightly lower than hips, back fully supported by your chair with lumbar support, and monitor at eye level about an arm's length away. Your elbows should be at 90 degrees when typing."
  },
  {
    question: "Should I use a footrest?",
    answer: "Yes, if your feet don't comfortably reach the floor when your chair is at the correct height for your desk. A footrest maintains the 90-degree ankle angle, which is crucial for proper posture and blood circulation. Most people under 5'8\" benefit from a footrest."
  },
  {
    question: "How high should my desk chair be?",
    answer: "Your chair height is correct when your feet rest flat (or on footrest), your knees form a 90-degree angle, and your elbows are at 90 degrees when your hands rest on your keyboard. Most people set their chair too low—if your knees are higher than your hips, raise your chair."
  },
  {
    question: "Where should my computer screen be?",
    answer: "Your monitor should be an arm's length away (20-28 inches) with the top of the screen at or slightly below eye level. You should look slightly downward (10-20 degrees) at the center of the screen. This prevents neck strain from looking up or down all day."
  },
  {
    question: "Is it better to sit or stand while working?",
    answer: "Neither pure sitting nor pure standing is ideal. The best approach alternates between sitting and standing every 30-60 minutes. Variety prevents any one position from causing strain. If using a standing desk, follow the same ergonomic principles as sitting: monitor at eye level, elbows at 90 degrees."
  },
  {
    question: "Can sitting cause permanent damage?",
    answer: "Prolonged poor sitting can lead to chronic muscle imbalances, spinal disc problems, and postural changes, but these are typically reversible with corrected posture and exercises. The key is early intervention—don't wait years to fix your sitting setup."
  },
  {
    question: "How often should I take breaks?",
    answer: "Take a 5-minute standing or walking break every 45-60 minutes. Even micro-breaks (standing for 30 seconds, shoulder rolls) every 30 minutes help. Frequency matters more than duration—five 2-minute breaks throughout the day beat one 10-minute break."
  },
  {
    question: "Are expensive office chairs worth it?",
    answer: "A quality ergonomic chair ($300-500) is worth it if you sit 6+ hours daily. Key features: adjustable lumbar support, seat depth adjustment, and adjustable armrests. Expensive doesn't always mean better—focus on adjustability. A $400 chair with proper adjustments beats a $1000 chair that doesn't fit you."
  },
  {
    question: "What if my desk is too high or low?",
    answer: "If your desk is too high, raise your chair and use a footrest so your feet aren't dangling. If it's too low, use desk risers or a keyboard tray to bring your work surface to proper height. Your elbows should be at 90 degrees when typing—adjust chair or desk to achieve this."
  },
  {
    question: "Should I cross my legs while sitting?",
    answer: "No, habitually crossing legs can lead to hip and pelvic misalignment, reduced circulation, and increased lower back pressure. Keep both feet flat on the floor (or footrest) for optimal posture. If you must cross legs, switch sides every 10-15 minutes and take frequent standing breaks."
  }
]

const relatedArticles = [
  {
    title: 'Desk Ergonomics Setup Guide',
    description: 'Complete workspace setup for perfect ergonomics and comfort.',
    href: '/desk-ergonomics-guide'
  },
  {
    title: 'Posture Tips for Office Workers',
    description: '15 practical tips every desk worker should know.',
    href: '/tips/office-workers'
  },
  {
    title: 'Standing Posture Guide',
    description: 'Learn proper standing alignment for break times and standing desks.',
    href: '/standing-posture-guide'
  }
]

const navigationPathway = {
  prev: {
    title: 'How to Improve Your Posture',
    href: '/how-to-improve-posture'
  },
  next: {
    title: 'Standing Posture Guide',
    href: '/standing-posture-guide'
  }
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.posturetips.com/sitting-posture-guide#article",
      "headline": "Perfect Sitting Posture for Desk Workers: Complete Setup Guide",
      "description": "Master proper sitting posture with this evidence-based guide for desk workers. Includes chair setup, monitor positioning, and break strategies.",
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
        "@id": "https://www.posturetips.com/sitting-posture-guide"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.posturetips.com/sitting-posture-guide#breadcrumb",
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
          "name": "Sitting Posture Guide"
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://www.posturetips.com/sitting-posture-guide#howto",
      "name": "How to Achieve Perfect Sitting Posture",
      "description": "Step-by-step guide to setting up proper sitting posture for desk work.",
      "totalTime": "PT15M",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Adjust Chair Height",
          "text": "Set chair height so feet rest flat on floor (or footrest) and knees form 90-degree angle, slightly lower than hips."
        },
        {
          "@type": "HowToStep",
          "name": "Position Lumbar Support",
          "text": "Adjust lumbar support to fit snugly into curve of lower back at waist height for proper spine alignment."
        },
        {
          "@type": "HowToStep",
          "name": "Set Monitor Height",
          "text": "Position monitor an arm's length away with top of screen at or slightly below eye level to prevent neck strain."
        },
        {
          "@type": "HowToStep",
          "name": "Position Keyboard and Mouse",
          "text": "Keep keyboard close enough that elbows stay at 90 degrees and upper arms hang naturally at sides."
        },
        {
          "@type": "HowToStep",
          "name": "Take Regular Breaks",
          "text": "Stand and walk for 5 minutes every 45-60 minutes to prevent stiffness and maintain circulation."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.posturetips.com/sitting-posture-guide#faq",
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

export default function SittingPostureGuide() {
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
              Perfect Sitting Posture for Desk Workers
            </h1>
            
            <SimpleAuthor 
              authorName="PostureTips Team"
              authorTitle="Ergonomics Specialists"
              lastUpdated="2025-10-24"
            />
          </header>

          <div className="hidden xl:block fixed left-8 top-32 w-64">
            <TableOfContents sections={tocSections} />
          </div>

          <ShortAnswer>
            Ideal sitting posture has your feet flat on the floor, knees and elbows at 90 degrees, back fully supported by your chair, and monitor at eye level about an arm's length away. Take 5-minute standing breaks every 45 minutes to prevent stiffness.
          </ShortAnswer>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="font-semibold text-blue-900 mb-2">
              Experiencing Chronic Neck or Upper Back Pain?
            </h3>
            <p className="text-blue-800 mb-3">
              If proper sitting posture hasn't resolved your neck pain or you've developed a visible neck hump from prolonged sitting, you may need targeted clinical treatment. See our evidence-based guide on underlying causes and treatment.
            </p>
            <a 
              href="https://www.neckhump.com/neck-hump-causes" 
              className="text-blue-600 font-medium hover:underline"
              target="_blank"
              rel="noopener"
            >
              View Neck Hump Causes & Treatment at NeckHump.com →
            </a>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <div className="prose prose-lg max-w-none">
            
            <h2 id="why-matters">Why Sitting Posture Matters</h2>
            <p>
              The average desk worker sits 8-12 hours daily when you count work, commuting, meals, and evening relaxation. Poor sitting posture during these hours is the primary cause of neck pain, back pain, and headaches in office workers.
            </p>

            <p>
              The good news? Most sitting-related problems are completely fixable with proper setup and habits. You don't need an expensive chair or fancy equipment—just correct positioning and regular movement breaks.
            </p>

            <p>
              Your spine has natural curves that need support while sitting. Slouching, leaning forward, or sitting without lumbar support flattens or exaggerates these curves, putting excessive strain on muscles, ligaments, and discs. Over time, this causes chronic pain and permanent postural changes.
            </p>

            <h2 id="90-90-90-rule">The 90-90-90 Rule (Foundation)</h2>
            <p>
              The 90-90-90 rule is the foundation of proper sitting posture. This simple principle ensures your body is positioned with minimal strain:
            </p>

            <ul>
              <li><strong>90 degrees at ankles:</strong> Feet rest flat on floor (or footrest) with ankles at 90-degree angle</li>
              <li><strong>90 degrees at knees:</strong> Knees form 90-degree angle, positioned slightly lower than hips</li>
              <li><strong>90 degrees at elbows:</strong> Elbows at 90 degrees when typing, upper arms hanging naturally at sides</li>
            </ul>

            <p>
              These angles ensure proper blood circulation, reduce joint pressure, and maintain your spine's natural curves. If you can't achieve all three simultaneously, your desk, chair, or monitor height needs adjustment.
            </p>

            <h2 id="chair-setup">Step-by-Step Chair Setup</h2>
            <p>
              Your chair is the foundation of good sitting posture. Most office chairs have 5-7 adjustable features. Here's how to set each correctly:
            </p>

            <h3>1. Seat Height Adjustment</h3>
            <p>
              Sit in your chair with feet flat on floor. Adjust height until knees form 90-degree angle and thighs are parallel to floor or angled slightly downward. If your desk height is fixed and this makes your elbows too low for typing, raise your chair and use a footrest.
            </p>

            <p>
              <strong>Common mistake:</strong> Setting chair too low. If your knees are higher than hips, you'll slouch forward. Raise the chair and use a footrest if needed.
            </p>

            <h3>2. Seat Depth (Front-to-Back)</h3>
            <p>
              Sit all the way back in your chair. There should be 2-4 finger widths of space between the front edge of the seat and the back of your knees. Too much space and you won't have lumbar support; too little space cuts off circulation to your legs.
            </p>

            <h3>3. Lumbar Support Positioning</h3>
            <p>
              Adjust the lumbar support (curved pad on backrest) so it fits snugly into the curve of your lower back, about waist height. When properly adjusted, you'll feel gentle pressure supporting your lower back curve. You shouldn't need to strain to sit upright.
            </p>

            <h3>4. Backrest Angle</h3>
            <p>
              Set the backrest to 100-110 degrees (slightly reclined from vertical). This reduces pressure on lower back discs by up to 40% compared to sitting bolt upright. Don't recline too far (120+ degrees) or you'll crane your neck forward to see your screen.
            </p>

            <h3>5. Armrest Height and Width</h3>
            <p>
              Set armrests so your elbows rest lightly on them with shoulders relaxed (not elevated). Your forearms should be parallel to floor when typing. If armrests push your elbows too wide or force shoulders up, remove them entirely—bad armrests are worse than no armrests.
            </p>

            <h2 id="desk-monitor">Desk and Monitor Positioning</h2>
            <p>
              Even with perfect chair setup, incorrect desk and monitor positioning will ruin your posture.
            </p>

            <h3>Monitor Distance and Height</h3>
            <ul>
              <li><strong>Distance:</strong> Arm's length away (20-28 inches). Extend your arm—fingertips should just touch the screen</li>
              <li><strong>Height:</strong> Top of screen at or slightly below eye level (1-2 inches below)</li>
              <li><strong>Viewing angle:</strong> Look slightly downward at center of screen (10-20 degrees below horizontal)</li>
              <li><strong>Solution:</strong> Use monitor stand, laptop riser, or stack of books to achieve proper height</li>
            </ul>

            <p>
              Most people set their monitor too low, forcing them to look down all day. This adds 10-15 pounds of pressure on neck muscles for every inch the head tilts forward.
            </p>

            <h3>Keyboard and Mouse Placement</h3>
            <ul>
              <li><strong>Keyboard:</strong> Directly in front of you, close enough that elbows stay at 90 degrees</li>
              <li><strong>Mouse:</strong> At same level as keyboard, within easy reach (no stretching)</li>
              <li><strong>Wrist position:</strong> Keep wrists neutral (straight), not bent up or down</li>
              <li><strong>Laptop users:</strong> Use external keyboard and mouse—you can't have proper monitor height and proper keyboard position simultaneously with a laptop alone</li>
            </ul>

            <h2 id="common-mistakes">Common Sitting Mistakes</h2>
            <p>
              Even with good setup, bad habits can creep in. Watch for these:
            </p>

            <ol>
              <li><strong>Perching on edge of chair:</strong> Eliminates lumbar support, causes lower back strain. Sit all the way back.</li>
              <li><strong>Crossing legs habitually:</strong> Creates hip and pelvic imbalances. Keep both feet flat on floor.</li>
              <li><strong>Leaning forward toward screen:</strong> Usually means monitor is too far, too low, or font is too small. Fix setup, don't lean.</li>
              <li><strong>Phone cradled between ear and shoulder:</strong> Severe neck strain. Use speakerphone or headset for calls.</li>
              <li><strong>Armrests too high:</strong> Forces shoulders to elevate, causing neck tension. Lower or remove them.</li>
              <li><strong>No lumbar support:</strong> Leads to slouching and lower back pain. Adjust support or use small cushion.</li>
              <li><strong>Monitor too low:</strong> Most common mistake. Causes you to look down all day, straining neck. Raise it.</li>
            </ol>

            <h2 id="movement-breaks">Movement Breaks Strategy</h2>
            <p>
              Here's counterintuitive truth: <strong>sitting perfectly still is worse than sitting "badly" with movement.</strong> Your body needs movement to maintain circulation, prevent stiffness, and keep muscles engaged.
            </p>

            <h3>Ideal Break Schedule</h3>
            <ul>
              <li><strong>Every 30 minutes:</strong> Micro-movement (ankle circles, shoulder rolls, stretch arms—takes 30 seconds)</li>
              <li><strong>Every 45-60 minutes:</strong> Stand up and walk around for 5 minutes (water break, bathroom, walk around office)</li>
              <li><strong>Lunch break:</strong> 10-15 minute walk outside if possible</li>
            </ul>

            <h3>Desk Stretches You Can Do Sitting</h3>
            <ol>
              <li><strong>Neck rotations:</strong> Slowly turn head left to right, 5 reps each side</li>
              <li><strong>Shoulder shrugs:</strong> Raise shoulders to ears, hold 3 seconds, release. 10 reps</li>
              <li><strong>Seated spinal twist:</strong> Rotate torso left, place right hand on left armrest, hold 15 seconds. Repeat other side</li>
              <li><strong>Ankle pumps:</strong> Flex and point feet, 20 reps to improve circulation</li>
              <li><strong>Wrist circles:</strong> Rotate wrists clockwise and counterclockwise, 10 reps each direction</li>
            </ol>

            <p>
              Set a timer or use an app to remind you to take breaks. After 2-3 weeks, movement breaks will become automatic.
            </p>

            <h2>Building the Habit</h2>
            <p>
              Perfect sitting posture isn't something you achieve once and forget. It requires ongoing awareness and minor adjustments throughout your day.
            </p>

            <ul>
              <li><strong>Set hourly reminders:</strong> "Posture check!" on your phone or computer</li>
              <li><strong>Use visual cues:</strong> Place sticky note on monitor saying "Shoulders back, feet flat"</li>
              <li><strong>Before/after body scan:</strong> Check in with your body at start and end of work. Where do you feel tension?</li>
              <li><strong>Weekly photos:</strong> Take side-view photos at your desk weekly to track posture improvements</li>
              <li><strong>Habit stacking:</strong> Link posture checks to existing habits (every time you open email, check posture first)</li>
            </ul>

            <p>
              Most people find good sitting posture becomes natural within 4-6 weeks of consistent practice. Your muscles will adapt, and sitting correctly will actually feel more comfortable than slouching.
            </p>

          </div>

          <div id="faq" className="mt-12">
            <FAQSection faqs={faqData} />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          <div className="mt-12">
            <NavigationPathway {...navigationPathway} />
          </div>

        </div>
      </article>
    </>
  )
}

