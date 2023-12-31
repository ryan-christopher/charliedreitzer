import '../../styles/globals.css'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Footer from '../components/Footer'
import { Outfit } from 'next/font/google'
import Head from 'next/head'
const outfit = Outfit({ subsets: ['latin'] })
import dynamic from 'next/dynamic'


const DynamicNav = dynamic(() => import('../components/Navbar'), {
    ssr: false,
})


export default function KnightWalk() {
    return (
        <main className="bg-[#f4f2ec] text-black text-left">
            <Head>
                <title>Knight Walk - Charlie Dreitzer</title>
                <link rel="icon" href="/media/icon.png" sizes="any" />
            </Head>
            <div className='relative md:inline-block w-[5%] md:w-[15%]'>
                <div>
                    <DynamicNav />
                </div>
            </div>
            <div className='inline-block w-full md:w-[85%]'>
                <div>
                    <ParallaxProvider>
                        <ParallaxBanner style={{ aspectRatio: 'auto' }} className="h-[200px] md:h-[300px] ml-auto mr-auto">
                            <ParallaxBannerLayer className='' image="media/knight.jpg" speed={-15} />
                            <ParallaxBannerLayer className='bg-[#21212172] font-["Palfour"] text-[#f4f2ec] lowercase' speed={0}>
                                <h2 className='mt-[90px] md:mt-[40px] pl-[5vw] text-[50px] md:text-[90px] text-left block ml-auto mr-auto w-full'>
                                    knight walk
                                </h2>
                                <h3 className='text-[25px] pl-[5vw] md:text-[35px] text-left block ml-auto mr-auto w-full'>
                                    11/14/2023
                                </h3>

                            </ParallaxBannerLayer>
                        </ParallaxBanner>
                    </ParallaxProvider>
                </div>
                <div className='relative w-full bg-[#f4f2ec]'>
                    <div className={`${outfit.className} block max-w-[750px] ml-auto mr-auto text-[18px] md:text-[20px] p-[20px] md:p-[50px] pt-[60px] leading-[30px] md:leading-[40px]`}>
                        <span className='font-["Butler"] text-[65px] md:text-[80px] float-left relative pt-[23px] md:pt-[32px] pr-[13px]'>T</span>
                        he general issued the stoppage order around midday. It wasn&rsquo;t
                        until the sun was just cresting the high crags to the west that
                        Bennett and the other soldiers of the rear light cavalry company
                        were halted by their beleaguered sergeant. Men grumbled and cursed
                        as they ushered their mounts into shallow outcroppings for
                        grooming and watering before dusk. Back to back with another soldier,
                        Bennett shucked rocks out of his horse&rsquo;s hooves and lamented
                        the difficulties of the last month. After a thirty-day march through
                        late winter storms and knee-high bogs, the general ushered
                        the legion into the narrow escarpment of Dragon&rsquo;s Spine- seemingly
                        as a reminder that soldiers who weren&rsquo;t happy with their death
                        march could try their chances at deserting in the chasm beside the ravine
                        path. Bennett braved a glance into the rocky abyss and
                        tried again to make out its bottom. The darkness seemed to pulse out,
                        joining into the night sky as the last rays of twilight
                        faded beyond the high overpass. He took a deep breath and turned back
                        to tend to his mount.
                        <br /><br />
                        Torchlight cast an orange glow on the bends and switchbacks of
                        Dragon&rsquo;s Spine for miles. Soldiers finished their camp duties
                        and played card games for choice sleeping spots away from the chasm.
                        The less fortunate brought down small boulders from the
                        escarpment and built crude guardrails or stuffed anchor rocks in their
                        cots. Keen to not join the dozen or so rumored to
                        have plummeted off the cliff in their sleep, Bennett collected stones
                        with one hand while he chewed on hard cheese with
                        the other. As he bent down to collect a rock, he heard shouts and
                        whinnies further down the column. Bennett squinted to
                        see Milo and Dannith squeeze past a clump of sleeping soldiers; he
                        smiled at the curses of men roused by their careless charge.
                        <br /><br />
                        Milo waved in a frenzied arc with both arms at the sight of Bennett,
                        and Dannith shouted &ldquo;This way!&rdquo; and turned back to plod
                        through the aggravated men dotting the narrow walkway. Bennett
                        chuckled, despite his dour mood, and followed them past the
                        far rear of the company and even then some through several switchbacks
                        that the army passed by in the day&rsquo;s march. At a
                        turning point to a small offshoot, he heard the strumming of a lute
                        and a dozen or so voices and followed the sound. The
                        noise led him to a small cave obscured by an array of boulders at its
                        entrance. Inside, men passed wineskins and sang
                        bawdy tunes around a small fire which cast the whole scene in a smoky,
                        amber glow.
                        <br /><br />
                        &ldquo;Bennett! Take a seat, you bastard,&rdquo; someone yelled out. The group
                        erupted in cheers and laughter as he melted into
                        the fanfare. An arm wrapped around his shoulders and another rolled
                        a wineskin into his palm. The harpist was strumming
                        something wild on his lute and two men danced to the crude rhythm in
                        a circle, locked at the elbow. Bennett found a
                        place by the fire and opened his skin with slow turns, eyeing the men
                        around him like his sergeant was lurking with a
                        deserter&rsquo;s rope. On one side, Dannith shot dice with a pikeman
                        that was also in a rearguard company, and to the other
                        Milo sat close to the flames, both hands pressed close enough to
                        smell the hairs singing.
                        <br /><br />
                        Lazaro, the oldest veteran cavalryman in his company, sat up from
                        where he lay flat and addressed Bennett. &ldquo;Take it in, man.
                        You&rsquo;re not likely to feel this warmth again &rsquo;till you&rsquo;re
                        sleeping in the Pontiff&rsquo;s feather bed.&rdquo; A couple
                        of the men chuckled at his jape and turned toward the conversation.
                        <br /><br />
                        &ldquo;You mean it?&rdquo;
                        <br /><br />
                        Lazaro&rsquo;s eyes flashed and he showed pointy teeth with a smile. &ldquo;Aye.
                        And His Holiness&rsquo; consorts will be there to warm you besides.&rdquo;
                        <br /><br />
                        &ldquo;No! Bloody hell, I mean, are we really marching to expel the Pontiff?&rdquo;
                        Bennett punched at the shoulders of the men laughing at his expense.
                        <br /><br />
                        &ldquo;Why not? Why else should Il Re demand the immediate return of his Imperial
                        Army after our southern campaign. To interrupt the despoiling of Catallino
                        and force a march through Dragon&rsquo;s Spine... I should think something fierce
                        has disrupted His Majesty&rsquo;s rule in the Holy City, no?&rdquo;
                        <br /><br />
                        Milo, never keen to army politics, chimed in: &ldquo;I just wish we could have
                        taken the long way north, or gone to the capital by sea. Risking casualties
                        to steal a march is one thing... but there&rsquo;s a reason the peak dwellers
                        call this passage the Dragon&rsquo;s Mouth.&rdquo;
                        <br /><br />
                        Dannith was counting the coppers he won off the pikemen when he turned
                        toward the chatter. &ldquo;Does that mean we&rsquo;re to leave through the Dragon&rsquo;s
                        Arse?&rdquo; They flared up in raucous laughter. &ldquo;I couldn&rsquo;t give a fig for
                        how we get there, as long as the dukes make good on the salaries they
                        promised for the southern campaign.&rdquo;
                        <br /><br />
                        &ldquo;Don&rsquo;t be stupid! His Holiness commands the might of God, like it as we
                        may not. Be they unholy, the winged serpents are still His creations. Should
                        our army do those things which are not in His will... mio Dio, we should
                        all pay.&rdquo;
                        <br /><br />
                        &ldquo;Pah! Superstition, friend. Man of God he might be, still he is just a
                        man,&rdquo; said Lazaro. &ldquo;Those beasts are not moved by our ilk.&rdquo;
                        <br /><br />
                        Bennett was intrigued. &ldquo;What if our army should be attacked by a wyvern
                        lurking in the pass, by the hand of the Pontiff or not?&rdquo; His wineskin
                        was emptied and lay by the fire.
                        <br /><br />
                        Lazaro grinned, with a face like he was looking at a puppy. &ldquo;They still
                        roost in caverns deep below the earth. It won&rsquo;t be until the warm weather
                        when they emerge for a summer feast of the peak dwellers&rsquo; herds. And
                        folly as this march may be, the general isn&rsquo;t witless enough to send his
                        army into a dragon&rsquo;s mouth.&rdquo;
                        <br /><br />
                        The men finished the last of their drinks; most left stumbling into the
                        blackness back to their place in line so their sergeants wouldn&rsquo;t know
                        anything was amiss in the morning. Bennett fell asleep by the dwindling
                        coals and dreamt that his body was engulfed by flames.
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    )
} 