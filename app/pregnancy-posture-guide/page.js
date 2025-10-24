import ReadingProgress from '../../components/ReadingProgress'
import Breadcrumbs from '../../components/Breadcrumbs'
import SimpleAuthor from '../../components/SimpleAuthor'
import ShortAnswer from '../../components/ShortAnswer'
import KeyTakeaways from '../../components/KeyTakeaways'
import FAQSection from '../../components/FAQSection'
import RelatedArticles from '../../components/RelatedArticles'

export const metadata = {
  title: 'Pregnancy Posture Guide: Support Your Changing Body',
  description: 'Safe posture tips and exercises during pregnancy. Learn how to adapt your posture as your body changes and reduce back pain throughout pregnancy.',
  alternates: {
    canonical: '/pregnancy-posture-guide'
  },
  openGraph: {
    title: 'Pregnancy Posture Guide: Support Your Changing Body',
    description: 'Safe posture tips and exercises for each trimester of pregnancy.',
    url: 'https://www.posturetips.com/pregnancy-posture-guide',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/' },
  { label: 'Pregnancy Posture' }
]

const keyTakeaways = [
  "Your center of gravity shifts forward as baby grows—adjust stance to compensate",
  "Pelvic tilts and prenatal yoga help strengthen muscles supporting your changing body",
  "Side sleeping with pillow between knees is safest and most comfortable",
  "Pregnancy pillows aren't luxury—they provide essential spine support in later trimesters",
  "Always consult your doctor before starting new exercises during pregnancy"
]

const faqData = [
  {
    question: "How does pregnancy affect posture?",
    answer: "Pregnancy shifts your center of gravity forward as baby grows, causing natural tendency to lean back and arch lower back. This, combined with loosened ligaments from relaxin hormone and increased weight, often leads to lower back pain. Good posture and strengthening exercises help manage these changes."
  },
  {
    question: "What is the best sleeping position during pregnancy?",
    answer: "Side sleeping (especially left side) is safest and most comfortable, with pillow between knees and under belly for support. Avoid back sleeping after first trimester (restricts blood flow) and stomach sleeping (uncomfortable and unsafe). Full-length pregnancy pillow provides excellent support."
  },
  {
    question: "Can I do posture exercises while pregnant?",
    answer: "Yes, but stick to pregnancy-safe exercises: pelvic tilts, cat-cow stretches (modified), prenatal yoga, gentle walking, and kegel exercises. Avoid crunches, intense twisting, exercises lying flat on back after first trimester, and any exercise causing pain. Always consult your doctor first."
  },
  {
    question: "How can I reduce back pain during pregnancy?",
    answer: "Maintain good posture (avoid excessive back arch), do daily pelvic tilts, wear supportive shoes with low heels, use pregnancy pillow for sleeping, take frequent sitting/standing breaks, apply heat/cold packs, get prenatal massage, and consider maternity support belt. Consult doctor if pain is severe."
  },
  {
    question: "When should I start using a pregnancy pillow?",
    answer: "Start using pregnancy pillow in second trimester (weeks 14-16) when belly growth makes side sleeping uncomfortable. Full-length body pillows or U-shaped pregnancy pillows provide support for belly, back, and between knees. Don't wait until third trimester—earlier support prevents pain."
  },
  {
    question: "Is it safe to exercise during pregnancy?",
    answer: "Yes, if pregnancy is healthy and doctor approves. Moderate exercise (walking, swimming, prenatal yoga) benefits both mom and baby. Avoid high-impact activities, contact sports, exercises with fall risk, and anything causing pain. Listen to your body and stop if something feels wrong."
  }
]

const relatedArticles = [
  {
    title: 'Sleep Posture Guide',
    description: 'Detailed sleep position guidance applicable to pregnancy.',
    href: '/sleep-posture-guide'
  },
  {
    title: 'Standing Posture Guide',
    description: 'Standing alignment tips for pregnancy.',
    href: '/standing-posture-guide'
  },
  {
    title: 'Walking Posture Guide',
    description: 'Safe walking techniques during pregnancy.',
    href: '/walking-posture-guide'
  }
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.posturetips.com/pregnancy-posture-guide#article",
      "headline": "Pregnancy Posture Guide: Support Your Changing Body",
      "description": "Safe posture tips and exercises during pregnancy. Learn how to adapt your posture as your body changes and reduce back pain throughout pregnancy.",
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
        "@id": "https://www.posturetips.com/pregnancy-posture-guide"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.posturetips.com/pregnancy-posture-guide#breadcrumb",
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
          "name": "Pregnancy Posture"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.posturetips.com/pregnancy-posture-guide#faq",
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

export default function PregnancyPostureGuide() {
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
              Posture During Pregnancy: Trimester-by-Trimester Guide
            </h1>
            
            <SimpleAuthor 
              authorName="PostureTips Team"
              authorTitle="Prenatal Health Specialists"
              lastUpdated="2025-10-24"
            />
          </header>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8 rounded-lg">
            <p className="text-amber-900 font-semibold mb-2">
              ⚠️ Medical Disclaimer
            </p>
            <p className="text-amber-800">
              Always consult your doctor or healthcare provider before starting new exercises or making significant changes during pregnancy. This guide provides general information but cannot replace medical advice for your specific situation.
            </p>
          </div>

          <ShortAnswer>
            During pregnancy, good posture means adjusting your stance as your center of gravity shifts forward. Use pregnancy pillows for sleep support, avoid locking your knees while standing, strengthen your core with safe exercises, and take frequent sitting breaks to reduce lower back pressure.
          </ShortAnswer>

          <KeyTakeaways takeaways={keyTakeaways} />

          <div className="prose prose-lg max-w-none">
            
            <p className="text-lg">
              Pregnancy brings dramatic body changes: weight gain, shifted center of gravity, loosened ligaments, and altered posture. Good posture reduces back pain, improves breathing, and supports your changing body.
            </p>

            <h2>How Pregnancy Affects Posture</h2>

            <h3>Physical Changes</h3>
            <ul>
              <li><strong>Center of gravity shifts forward:</strong> Growing belly pulls body forward</li>
              <li><strong>Increased lumbar curve:</strong> Natural tendency to arch lower back</li>
              <li><strong>Loosened ligaments:</strong> Relaxin hormone prepares body for birth but reduces joint stability</li>
              <li><strong>Weight gain:</strong> 25-35 pounds average, mostly in front</li>
              <li><strong>Breast changes:</strong> Increased size adds weight to front of body</li>
              <li><strong>Abdominal muscle separation:</strong> Diastasis recti common in later trimesters</li>
            </ul>

            <h3>Common Posture Problems</h3>
            <ul>
              <li>Excessive lower back arch (hyperlordosis)</li>
              <li>Forward head position</li>
              <li>Rounded shoulders</li>
              <li>Knees locking backward (hyperextension)</li>
              <li>Swayback posture</li>
            </ul>

            <h2>First Trimester Posture Tips</h2>
            <p>
              <strong>Weeks 1-13: Minimal visible changes but important foundation</strong>
            </p>

            <h3>Focus Areas</h3>
            <ul>
              <li>Establish good posture habits before belly grows</li>
              <li>Begin pelvic floor exercises (kegels)</li>
              <li>Continue normal activities if feeling well</li>
              <li>Address any pre-existing posture problems now</li>
            </ul>

            <h3>Safe Exercises</h3>
            <ul>
              <li>Walking (20-30 minutes daily)</li>
              <li>Swimming and water aerobics</li>
              <li>Prenatal yoga (gentle)</li>
              <li>Pelvic tilts</li>
              <li>Cat-cow stretches</li>
              <li>Kegel exercises</li>
            </ul>

            <h3>What to Avoid</h3>
            <ul>
              <li>Contact sports</li>
              <li>Activities with fall risk (skiing, horseback riding)</li>
              <li>Hot yoga or exercise in excessive heat</li>
              <li>Exercises lying flat on back (after week 12)</li>
            </ul>

            <h2>Second Trimester Adjustments</h2>
            <p>
              <strong>Weeks 14-27: Belly growing, energy often returns</strong>
            </p>

            <h3>Standing Posture Adjustments</h3>
            <ul>
              <li>Widen stance slightly (hip-width apart) for stability</li>
              <li>Avoid locking knees backward</li>
              <li>Tuck pelvis slightly (reduce lumbar arch)</li>
              <li>Keep shoulders back (counteract forward pull of belly)</li>
              <li>Engage core gently (don't suck in)</li>
            </ul>

            <h3>Sitting Position</h3>
            <ul>
              <li>Use lumbar support (cushion or rolled towel)</li>
              <li>Sit all the way back in chair</li>
              <li>Feet flat on floor or footrest</li>
              <li>Take breaks every 30-45 minutes (more frequent than pre-pregnancy)</li>
              <li>Avoid crossing legs (reduces circulation)</li>
            </ul>

            <h3>Sleep Position</h3>
            <ul>
              <li><strong>Start side sleeping now</strong> (before it becomes necessary)</li>
              <li>Left side is ideal (improves blood flow to baby)</li>
              <li>Place pillow between knees</li>
              <li>Consider pregnancy pillow for support</li>
              <li>Avoid back sleeping (can restrict blood flow after 20 weeks)</li>
            </ul>

            <h2>Third Trimester Support</h2>
            <p>
              <strong>Weeks 28-40: Maximum belly size, most challenging</strong>
            </p>

            <h3>Standing Modifications</h3>
            <ul>
              <li>Imagine string pulling top of head up (counteracts forward lean)</li>
              <li>Take frequent standing breaks (don't stand in one spot long)</li>
              <li>Use footstool to elevate one foot when standing long periods</li>
              <li>Wear supportive shoes with low heels (1 inch or less)</li>
              <li>Consider maternity support belt for pelvic/back pain</li>
            </ul>

            <h3>Getting Up Safely</h3>
            <p>
              <strong>From lying down:</strong>
            </p>
            <ol>
              <li>Roll onto side</li>
              <li>Use arms to push up to sitting</li>
              <li>Pause before standing</li>
              <li>Stand slowly (prevents dizziness)</li>
            </ol>

            <p>
              <strong>From sitting:</strong>
            </p>
            <ol>
              <li>Scoot to edge of chair</li>
              <li>Place feet under you</li>
              <li>Use armrests for support</li>
              <li>Stand using leg muscles (not back)</li>
            </ol>

            <h3>Lifting and Carrying</h3>
            <ul>
              <li>Avoid lifting heavy objects (ask for help)</li>
              <li>When lifting toddlers/light items: squat with legs, not bend with back</li>
              <li>Hold objects close to body</li>
              <li>Never twist while lifting</li>
              <li>Split grocery loads into smaller trips</li>
            </ul>

            <h2>Safe Pregnancy Posture Exercises</h2>

            <h3>Pelvic Tilts (Daily, All Trimesters)</h3>
            <p>
              <strong>Benefits:</strong> Strengthens abs, relieves back pain<br/>
              <strong>How:</strong> Stand with back against wall. Tilt pelvis to flatten lower back against wall. Hold 5 seconds. Repeat 10 times. Can also do on hands and knees.
            </p>

            <h3>Cat-Cow (Modified, Daily)</h3>
            <p>
              <strong>Benefits:</strong> Spinal mobility, relieves back tension<br/>
              <strong>How:</strong> On hands and knees, gently arch back (cow) then round back (cat). Move slowly. 10 repetitions. Avoid in third trimester if uncomfortable.
            </p>

            <h3>Prenatal Squats (Second Trimester)</h3>
            <p>
              <strong>Benefits:</strong> Leg strength, prepares for birth<br/>
              <strong>How:</strong> Stand with feet hip-width, squat down keeping back straight, return to standing. Use chair for support. 10 repetitions. Stop if uncomfortable.
            </p>

            <h3>Kegel Exercises (Throughout Pregnancy)</h3>
            <p>
              <strong>Benefits:</strong> Pelvic floor strength, birth preparation, prevents incontinence<br/>
              <strong>How:</strong> Contract pelvic floor muscles (as if stopping urine), hold 5-10 seconds, release. 10 reps, 3 times daily.
            </p>

            <h3>Wall Push-Ups (Modified Strength)</h3>
            <p>
              <strong>Benefits:</strong> Upper body strength, maintains chest and shoulder strength<br/>
              <strong>How:</strong> Stand arm's length from wall, place hands on wall shoulder-width apart, lean in and push back. 10-15 reps. Easier than floor push-ups.
            </p>

            <h2>Sleep Posture While Pregnant</h2>

            <h3>Best Position: Left Side</h3>
            <ul>
              <li>Improves blood flow to placenta</li>
              <li>Reduces pressure on liver</li>
              <li>Helps kidney function</li>
              <li>Reduces swelling in legs</li>
            </ul>

            <h3>Pillow Support System</h3>
            <ul>
              <li><strong>Between knees:</strong> Keeps hips aligned</li>
              <li><strong>Under belly:</strong> Supports weight</li>
              <li><strong>Behind back:</strong> Prevents rolling onto back</li>
              <li><strong>Head pillow:</strong> Maintains neck alignment</li>
            </ul>

            <h3>Pregnancy Pillow Types</h3>
            <ul>
              <li><strong>Full-length body pillow:</strong> One pillow does multiple jobs</li>
              <li><strong>U-shaped:</strong> Supports front and back simultaneously</li>
              <li><strong>C-shaped:</strong> Wraps around body</li>
              <li><strong>Wedge pillow:</strong> Small pillow for targeted support (belly or back)</li>
            </ul>

            <h2>When to See a Specialist</h2>
            <p>
              Contact healthcare provider if you experience:
            </p>
            <ul>
              <li>Severe or persistent back pain</li>
              <li>Pain radiating down legs (sciatica)</li>
              <li>Pelvic girdle pain affecting walking</li>
              <li>Sudden posture changes or difficulty walking</li>
              <li>Pain with numbness or tingling</li>
              <li>Pain after falls or accidents</li>
            </ul>

            <p>
              Physical therapists specializing in prenatal care can provide exercises and techniques for your specific situation.
            </p>

            <h2>Postpartum Posture</h2>
            <p>
              <strong>After birth, posture challenges continue:</strong>
            </p>

            <h3>Common Issues</h3>
            <ul>
              <li>Forward lean from nursing/bottle feeding</li>
              <li>Weakened abdominal muscles (diastasis recti)</li>
              <li>Carrying baby on one hip habitually</li>
              <li>Sleep deprivation affecting posture awareness</li>
            </ul>

            <h3>Recovery Tips</h3>
            <ul>
              <li>Wait 6-8 weeks before resuming intense exercise</li>
              <li>Start with gentle walking and pelvic floor exercises</li>
              <li>Get clearance from doctor before returning to pre-pregnancy routine</li>
              <li>Consider postpartum physical therapy for diastasis recti</li>
              <li>Practice good nursing posture (bring baby to breast, not breast to baby)</li>
            </ul>

            <h2>Daily Pregnancy Posture Checklist</h2>
            <ul>
              <li>□ Morning pelvic tilts (10 reps)</li>
              <li>□ Posture check when standing (shoulders back, knees soft)</li>
              <li>□ Lumbar support when sitting</li>
              <li>□ Standing breaks every 30-45 minutes</li>
              <li>□ Afternoon walk (20-30 minutes if feeling well)</li>
              <li>□ Evening stretches (cat-cow, gentle movements)</li>
              <li>□ Proper pillow setup for side sleeping</li>
              <li>□ Hydration throughout day</li>
            </ul>

            <p>
              Pregnancy is temporary, but habits formed during pregnancy can last. Taking care of your posture now protects your body for years to come.
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

