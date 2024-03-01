import Link from "next/link";

export const MainENG = () => {
    return(
        <div className="flex flex-col px-5 py-5 space-y-5 text-[#272728]">

            <div>
                <p className="text-xl sm:text-3xl font-semibold text-[#272728]">
                    Long-COVID crash forecast.
                </p>
                <p><br/></p>
                <p className="font-semibold text-[#c03434] px-10">
                    The score goes from 0 (most likely no crash or high activity) to 100 (most likely crash or low activity). 
                    <br/>
                    Disclaimer: The crash score continues to be under development and its accuracy might be low. If you have any comments or suggestions 
                    please consider leaving a comment in the following <Link href="https://forms.gle/d2fN8Yw44CUgQmUg7"  target="_blank" rel="noopener noreferrer">form</Link>. 
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold ">
                    How does it work?
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    The crash score is the weighted average of six solar weather variables&apos; standard deviation (X-ray flux, magnetic field in the z 
                    dimension and total, proton temperature, speed, and density). The weight is calculated as the inverse of the mean normalized 
                    solar gradient. At near-zero gradient conditions (maxima or minima) the crash score will increase and its final value will depend 
                    on both solar variability and time. At different gradient conditions, the crash score will depend mostly on solar variability. 
                    <p><br/></p>

                    <p><br/></p>
                    Although it might seem strange the selection of those variables there&apos;s enough evidence that points towards a solar/circadian 
                    rhythmicity. The following presents the rationale behind the design of the index as well as molecular mechanisms behind the 
                    different symptoms experienced by long-COVID patients. 
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Covid-19 and its relationship with solar activity.
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    Relationships between COVID-19 and solar activity have been presented and accumulated throughout the ongoing pandemic. 
                    Latitude dependence on the 
                    <Link href="https://journals.sagepub.com/doi/10.1177/1176934321989695"  target="_blank" rel="noopener noreferrer"> first</Link>, and subsequent, 
                    COVID-19 waves, the protective effect of 
                    <Link href="https://doi.org/10.1093/qjmed/hcac040"  target="_blank" rel="noopener noreferrer" > vitamin D </Link> along with the 
                    protective effect of <Link href="https://www.sciencedirect.com/science/article/pii/S1011134422002342"  target="_blank" rel="noopener noreferrer"> infrared radiation </Link>
                    are some of the many pieces of evidence that point toward a solar correlation. 
                    SARS-Cov2 positivity also followed a solar schedule as 
                    <Link href="https://doi.org/10.1177/07487304211051841"  target="_blank" rel="noopener noreferrer" > positivity  </Link>
                    increased at a particular time of the day. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10231992/
                    Vaccine efficiency also has a timing preference, particularly being more effective when is administered in the 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10231992/"  target="_blank" rel="noopener noreferrer" > afternoon. </Link>
                    
                    <p><br/></p>
                    However what we experience in our daily life as solar activity is the result of a combination of a series of processes that 
                    happen at different time scales. There are daily changes in solar radiation that follow a 24-hour cycle also known as the 
                    circadian cycle. Changes in planetary location also change how we experience solar activity by changing the sunshine duration. 
                    Also, the sun has different cycles of activity of different durations, over each cycle there are periods of high and low activity. 
                    This combination of cycles is disentangled by our organism to schedule different physiological changes needed to ensure proper function. 
                    <p><br/></p>
                    Like solar activity the SARSCov2 genome is always changing, genome composition oscillates through time and those oscillations 
                    appear to be random. Yet if the genome composition is analyzed to obtain a general scale that describes the behavior of the virus the 
                    analysis shows that the virus behaves by following a solar scale.  Although the analysis cannot be presented on this site, you can access 
                    a comprehensive summary at the following 
                    <Link href="https://github.com/TavoGLC/SARSCov2Solar"  target="_blank" rel="noopener noreferrer" > link. </Link>
                    <p><br/></p>
                    Non-linearity of the scale, as well as the different confounding factors that can modify solar activity like cloudiness, ozone, 
                    pollution, and geographical location, might be some of the reasons why such observation remains elusive. Sociological reasons might 
                    also be there, as the hypothesis is often received with disbelief (although it might explain why the rise in freedom-centric beliefs 
                    as well as conspiracy theories of an invisible force controlling everything from behind the curtain, maybe we all know, just don&apos;t 
                    know how to explain it, but, don&apos;t quote me on that ... yet ) I will just ask the reader to treat solar activity as any other 
                    environmental variable. The following proposes how an adaptation that results from a viral infection disrupts the chemical signal 
                    used to measure time, and how could generate long-COVID symptoms. 
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Slowing down viral propagation.
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                Once the virus enters the host the immune system detects it and tracks it down, the main objective is to limit the number of cells 
                that the virus might reach. This is achieved by two main strategies, the first one and the most widely known is active surveillance, 
                where the different cells of the immune system detect and destroy infected cells. The second strategy consists of slowing down 
                DNA or RNA production. This can be achieved by the secretion of interferons, molecules that send the signal to interfere with DNA or 
                RNA production, or by the direct degradation of nucleotides, the building blocks of DNA or RNA. If the infection becomes persistent 
                or reaches other tissues the second strategy will reduce the burden of the active surveillance system. Also, it will be successful in 
                reducing viral load especially if the virus propagates by cell-to-cell fusion. However degradation of nucleotides might be the last 
                resource as nucleotides and their chemical derivatives are also signaling molecules, thus their degradation could have diverse repercussions. 
                If such a strategy is ever used there will be a wide range of adaptations that circle around the nucleotide that lowers the most viral replication. 
                <p><br/></p>
                A key characteristic of the SARS-Cov2 genome, particularly its chemical composition is that  adenine is at relatively high levels in 
                periods of high transmission and persistence. Thus lowering adenine 
                content as a whole inside the host will have a greater impact compared to any other nucleotide. Besides from high secretion of adenine 
                in urine, or low adenine in plasma, other arrangements could facilitate the implementation of the embargo/blockade. Enzymes involved in 
                the biosynthesis of purine could be downregulated and their intermediations will also be found in lower quantities. Energy production 
                could go down as adenine is the main component of ATP.  Enzymes involved in the hydrolysis of ATP could be downregulated to maintain 
                adenine in ATP form. Receptors and other proteins that respond to adenine or its derivatives could be upregulated to maintain the same 
                signal at lower levels of adenine. Channels and transporters could change their expression to allow faster movement of adenine and its 
                derivatives across different compartments. 
                <p><br/></p>
                Although there are many adenine derivatives I will focus mostly on adenosine, an adenine derivative.  And I will present how it could 
                generate post-acute sequelae under a simple scenario that requires low levels of adenosine, and increased expression of at least one 
                protein responsive to adenosine the adenosine receptor, particularly the A2AR encoded by the ADORA2A gene. 
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Relationship between adenine, solar irradiation, and the circadian rhythm. 
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    Adenosine directly links the circadian rhythm and the light 
                    <Link href="https://www.nature.com/articles/s41467-021-22179-z"  target="_blank" rel="noopener noreferrer" > stimuli, </Link>
                    mainly by increasing its extracellular concentration, following 
                    a pattern similar to the one described by the solar flux graph. The pacemaker activity of adenine allows it to have a chemical signature 
                    that correlates with the current time. Accumulation of adenosine in the brain sends signals that align with the sleep-wake cycle or 
                    circadian cycle. This signal is translated inside the neuron through the activation of the adenosine receptor. 
                    <p><br/></p>
                    Under normal conditions, the circadian cycle has a duration of 24 hours and responds to changes in illumination or solar irradiation. 
                    But if the conditions of an adenine embargo/blockade are satisfied, then an adenosine signal might be overreactive if different 
                    adenosine-responsive elements are heavily upregulated. This will allow adenosine to follow high-frequency signals of solar irradiation 
                    like solar flares. And as those events are random, the symptoms generated by the embargo will also appear random.  Each rise and fall of 
                    solar activity could be interpreted as the circadian cycle, starting signaling events that require other components that are not available 
                    leading to a crash. 
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Post-acute sequelae of COVID-19 or long-COVID as a consequence of an adenosine embargo/blockade. 
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    A characteristic of long-COVID is the wide range of post-acute sequelae (symptoms) that it could generate. To track the different symptoms 
                    of long-COVID a series of comments and observations from the r/covidlonghaulers subreddit are taken and a mechanism behind such symptoms 
                    will be proposed, mainly how the deregulation of the adenosine system could impact and generate such symptoms. 
                    
                    <p><br/></p>
                    Heightened sensitivity to adenosine due to high adenosine receptor expression might be one of the mechanisms behind sleep and energy 
                    disturbances reported in long-COVID. Such disruption could also be the reason behind rhythmicity in crashes reported by long-COVID patients. 
                    Patients report low activity levels or higher pain levels at near-zero solar gradient conditions (afternoon, morning, down). Also during 
                    night time the influence of random solar events will be diminished by the natural movement of the earth, this could explain the nocturnal 
                    lifestyle adopted by some patients. 
                    
                    <p><br/></p>
                    In the brain adenosine also functions as a regulatory neurotransmitter, this is achieved by the properties of the adenosine receptor, it 
                    can bind to other receptors and channels and modulate its activity. This allows the modulation of different neuronal 
                    circuits and pathways that are not directly responsive to adenosine. 
                    Adenosine targets pathways involved in 
                    <Link href="https://onlinelibrary.wiley.com/doi/10.1111/jnc.14841"  target="_blank" rel="noopener noreferrer"> depression </Link>
                    , its overexpression in rats, and mice increased the depression-like behaviors. While 
                    its blockade resulted in antidepressant-like effects in multiple experimental models. Deregulation of adenosine could lead to depression
                    symptoms matching the reports of long-COVID patients. 
                    
                    <p><br/></p>
                    Fear conditioning is also another behavioral trait in which the adenosine receptor is involved. However its regulatory effect appears 
                    to vary according to its location, current understanding shows that it&apos;s involved in fear 
                    <Link href="https://www.nature.com/articles/s41398-023-02613-0#ref-CR20"  target="_blank" rel="noopener noreferrer"> consolidation. </Link>
                    Thus it might lead to aberrant and extreme fear, or not fear at all, both phenotypes already reported by long-COVID patients. 
                    Single nucleotide polymorphisms inside the adenosine receptor gene have been linked to several anxiety-related psychiatric disorders 
                    like panic disorder, agoraphobia, blood injury phobia, autism, caffeine induced anxiety, amphetamine-induced anxiety, and anxiety-related 
                    <Link href="https://www.intechopen.com/chapters/17570"  target="_blank" rel="noopener noreferrer"> personality. </Link>
                    Decision-making processes can also be affected by the adenosine receptor. Particularly by modulating dopamine receptors in the nucleus 
                    accumbens and other neuronal circuits. 
                    <Link href="https://www.futuremedicine.com/doi/abs/10.2217/fnl.10.19"  target="_blank" rel="noopener noreferrer"> circuits. </Link>
                    Decision-making and effort-related problems have also been reported by long-COVID patients. 
                    Short-term memory is also regulated by the adenosine receptor, as it prevents memory impairment due to scopolamine 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4523339/"  target="_blank" rel="noopener noreferrer"> treatment. </Link>
                    Memory problems are another common symptom of long-COVID patients. 
                    
                    <p><br/></p>
                    Also, adenosine and the adenosine receptor are involved in regulating light 
                    <Link href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/ejn.12715"  target="_blank" rel="noopener noreferrer"> sensitivity, </Link>
                    <Link href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/ejn.12715"  target="_blank" rel="noopener noreferrer"> retinal inflammation, </Link>
                    <Link href="https://iovs.arvojournals.org/article.aspx?articleid=2182021"  target="_blank" rel="noopener noreferrer"> and intraocular pressure. </Link>
                    Dysregulation of adenosine signaling in the eye could impair many of those systems. Many of these have already been reported by long-COVID 
                    patients. 
                    
                    <p><br/></p>
                    Hearing problems like tinnitus or hearing loss have also been recurrently reported as symptoms of long-COVID patients. Although the 
                    information regarding the adenosine receptor and hearing loss is scarce, it has been shown that the adenosine receptor regulates the 
                    <Link href="https://www.sciencedirect.com/science/article/abs/pii/S037859551630449X"  target="_blank" rel="noopener noreferrer"> susceptibility to </Link>
                    hearing loss. As well as association studies between 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8558950/"  target="_blank" rel="noopener noreferrer"> tinnitus  </Link>
                    and caffeine, an adenosine receptor antagonist. 
                    
                    <p><br/></p>
                    Olfactory impairments have also been reported as symptoms of long-COVID. In the olfactory bulb, the adenosine receptor has been linked 
                    to olfactory 
                    <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0006899321004479"  target="_blank" rel="noopener noreferrer"> discrimination </Link>
                    in rats and mice. 
                    
                    <p><br/></p>
                    Taste perception has also been linked to the adenosine receptor (A2B), particularly by regulating the perception of 
                    <Link href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0030032"  target="_blank" rel="noopener noreferrer"> sweet flavors. </Link>
                    A particular symptom that is also experienced by long-COVID patients. 
                    
                    <p><br/></p>
                    Skin sensitivity to pressure, temperature, and other kinds of stimulations has also been reported by long-COVID patients. The adenosine 
                    receptor also has a particular role in pain 
                    <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0014299997016051"  target="_blank" rel="noopener noreferrer"> perception, </Link>
                    its activation enhances pain perception. 
                    
                    Another skin-related symptom is the appearance of a wide range of skin lesions. A polymorphism of the ADORA3A gene, another kind of 
                    adenosine receptor has been involved in aspirin-induced 
                    <Link href="https://academic.oup.com/bjd/article-abstract/163/5/977/6644091?login=false"  target="_blank" rel="noopener noreferrer"> urticaria. </Link>
                    
                    Also the modulation of the adenosine receptor in animal models ameliorates psoriasis-like dermatitis in 
                    <Link href="https://www.sciencedirect.com/science/article/pii/S0022202X21021643"  target="_blank" rel="noopener noreferrer"> mice. </Link>
                    
                    Skin lesions have been identified as the result of the mast cell activation syndrome. Although in some cases MCAS might be the 
                    underlying condition the adenosine receptor also regulates mast cell 
                    <Link href="https://www.tandfonline.com/doi/abs/10.1080/sj.mn.7300101"  target="_blank" rel="noopener noreferrer"> activation. </Link>
                    
                    <p><br/></p>
                    Mast cells are another kind of cell that belongs to the immune system. Immune dysregulation is another of the main symptoms reported 
                    by long-COVID patients. Adenosine has immunosuppressive properties that appear to be controlled 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2753927/"  target="_blank" rel="noopener noreferrer"> locally. </Link>
                    
                    Dysregulation of adenosine signaling is also involved in immunosuppression 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5916829/"  target="_blank" rel="noopener noreferrer"> syndromes. </Link>
                    
                    <p><br/></p>
                    A rise in plasmatic cAMP, an adenosine derivative, is also found when changes in position occur or 
                    <Link href="https://pubmed.ncbi.nlm.nih.gov/219012/"  target="_blank" rel="noopener noreferrer"> orthostasis. </Link>

                    Furthermore, the head-up tilt test showed that patients with orthostatic intolerance had higher plasmatic levels of 
                    <Link href="https://www.endocrine-abstracts.org/ea/0063/ea0063p1030"  target="_blank" rel="noopener noreferrer"> adenosine. </Link>
                    Deregulation of adenosine signaling in orthostasis could be the basis for POTS. 

                    <p><br/></p>
                    Physical activity is another stimulus that enhances the adenosine signaling axis by increasing the adenosine plasma 
                    <Link href="https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2020.00097/full"  target="_blank" rel="noopener noreferrer"> concentration. </Link>

                    Particularly the adenosine receptor regulates exercise hyperaemia 
                    <Link href="https://physoc.onlinelibrary.wiley.com/doi/10.1113/jphysiol.2007.136416"  target="_blank" rel="noopener noreferrer"> (increase in blood flow) </Link>

                    <p><br/></p>
                    Although is not an exhaustive list, the previous shows how the dysregulation of a single signaling molecule and its receptor can 
                    generate a wide variety of symptoms. The kind of symptom most likely will point to specific cells and tissues already reached by 
                    the virus. While its timing might depend on the specific cellular turnover rate. There&apos;s also most likely an imprinting regarding 
                    the specific time and variant that infected each patient. However the recurrence of mostly a single target, the adenosine receptor 
                    (A2AR, ADORA2A), also shows that treatment options could be constrained to a few targets. 
                    
                    <p><br/></p>
                    
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Symptom management
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    With the lack of a specific treatment, symptom management has been the current path for treating long-COVID. From nutriceuticals 
                    to pharmaceutical intervention long-COVID patients have shared a series of interventions that alleviate some of the symptoms. 
                    Some successful treatments also target the pathways regulated by adenosine at different levels. 
                    <p><br/></p>
                    Supplements like magnesium as well as omega-3 have been recommended by long-COVID patients as they alleviate some of the symptoms. 
                    Both magnesium and omega-3 fatty acids regulate the function of the adenosine receptor. Omega-3 fatty acids regulate the oligomerization 
                    with the 
                    <Link href="https://pubmed.ncbi.nlm.nih.gov/26796668/"  target="_blank" rel="noopener noreferrer"> dopamine receptor. </Link>
                    
                    While magnesium modulates the response to stimuli of the 
                    <Link href="https://pubmed.ncbi.nlm.nih.gov/9884987/"  target="_blank" rel="noopener noreferrer"> adenosine receptor. </Link>
                    
                    
                    <p><br/></p>
                    HBOT is another common treatment recommended by long-COVID patients. One of the targets regulated by HBOT is the hypoxia-inducible factor, 
                    which regulates extracellular adenosine levels. HBOT attenuates the function of HIF by increasing 
                    <Link href="https://www.tandfonline.com/doi/full/10.2147/IJGM.S172460"  target="_blank" rel="noopener noreferrer"> oxygen concentration. </Link>

                    <p><br/></p>
                    Acupuncture is another treatment recommended by long-COVID patients. It has been shown that acupuncture regulates adenosine signaling 
                    by a 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3587733/"  target="_blank" rel="noopener noreferrer"> local increase. </Link>
                    
                    <p><br/></p>
                    Quercetin, another commonly recommended supplement, is an adenosine receptor antagonist and also inhibits the 
                    <Link href="https://pubmed.ncbi.nlm.nih.gov/20814335/"  target="_blank" rel="noopener noreferrer"> adenosine deaminase in rats. </Link>
                    
                    <p><br/></p>
                    Naltrexone, another pharmacologic treatment recommended for the management of long-COVID, up-regulates the 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1573935/"  target="_blank" rel="noopener noreferrer"> adenosine receptor A1. </Link>
                    
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Purinergic signaling in COVID-19 and long-COVID
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    Addressing the role of adenine and its derivatives has already been presented in the scientific literature. However, it has been 
                    addressed using the broader term of purinergic signaling. Adenine is a purine derivative, the same as guanine and other chemical 
                    derivatives. Some of the previously presented conditions for an adenine blockade/embargo have already been found. High expression 
                    of some of the purinergic signaling elements, particularly the adenosine receptor (A2AR, ADORA2A). COVID-19 severity inversely 
                    correlates to plasmatic adenosine levels, high level of adenosine correlates to 
                    <Link href="https://www.sciencedirect.com/science/article/pii/S1471489223000322#bib50"  target="_blank" rel="noopener noreferrer"> mild cases. </Link>
                    While in long-COVID patients, there was a lower abundance of 
                    <Link href="https://www.nature.com/articles/s41467-023-44432-3..."  target="_blank" rel="noopener noreferrer"> purine-derived metabolites. </Link>
                    
                    Current information regarding the pathology of long-COVID is scarce due to the stigma associated with the disease as well as the 
                    lack of precise criteria to make a diagnosis. However part of the information aligns with the blockade/embargo hypothesis. Yet it does 
                    not try to invalidate any other finding regarding the pathophysiology of long-COVID. But it tries to describe a phenomenon that 
                    could be happening at the same time that it is adjacent or runs in parallel to some of the current hypotheses. Furthermore, it provides 
                    a molecular target with a wide variety of activators and blockers, some already available and FDA-approved for 
                    <Link href="https://journals.physiology.org/doi/pdf/10.1152/physrev.00049.2017"  target="_blank" rel="noopener noreferrer"> other diseases. </Link>
                    
                    <p><br/></p>
                    As the regulation of the adenosine receptor also regulates immune function a particular combination of mupadolimab plus 
                    ciforadenant (an A2AR antagonist) was part of a clinical trial aimed at evaluating the efficiency of different treatments against 
                    COVID-19. However, it was ended in 2021 due to the introduction of vaccines. 
                    <p><br/></p>
                    If a symptom previously or not previously discussed seems to be manageable by any treatment targeting the A2AR please consider 
                    discussing it with your attending physician. Each case must be evaluated individually, and act accordingly.  Off-label use is not illegal 
                    but often discouraged, however sometimes becomes the norm when there are 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3538391/"  target="_blank" rel="noopener noreferrer"> no available guidelines. </Link>
                    
                </p>
            </div>
            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Summing up 
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    SARS-Cov2 follows a solar schedule for its adaptation which results in recurrent changes of its genomic composition, however at 
                    periods of high prevalence its genome heavily relies on adenine for its synthesis. Once SARS Cov2 infects its host the host initiates 
                    a series of adaptations to reduce viral propagation. Such actions can be described as the surveillance and removal of the virus by 
                    the different cells and antibodies generated by the immune system. Alongside surveillance, the synthesis of nucleic acids is reduced 
                    either by interferon or by the degradation of nucleotides. If the infection spreads to other tissues then lowering the content of adenine 
                    will be the most effective strategy to try to contain the infection, as is at relatively high levels at periods with high prevalence. 
                    This will compromise signaling pathways that rely on adenine derivates as they can function as second messengers. To overcome such 
                    impact receptors and other adenine-responsive genes are upregulated to maintain the same signaling effects under limited supply. 
                    Upregulation can lead to over-sensitivity to adenosine(an adenine derivative) responsive stimuli like solar irradiation. Rare and random 
                    events like solar flares could lead to adenosine release crashing the over-reactive system and generating different symptoms. Specific 
                    symptoms will most likely point to distinct tissues and organs already reached by the virus. While its recurrence or the lag before 
                    experiencing any symptom most likely will follow the cellular turnover rate of such tissue. The A2AR receptor appears to be a promising 
                    target for the development of treatments specific to long-COVID. 
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Things that did not make the cut or add up. 
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    The embargo/blockade strategy requires low levels of adenine and hence adenosine also has an increase in receptors or other proteins to 
                    propagate the signal. However, a successful strategy shouldn&apos;t generate any kind of symptoms, thus if an embargo is implemented it might 
                    be either localized to specific infected tissues, or the virus up-regulates the synthesis of nucleotides as a whole. The scenario presented 
                    is not complete and is just an approximation that attempts to provide a unified explanation of a complex issue. Yet it provides different 
                    possible markers, adenosine levels could provide a continuous marker of long-COVID risk or worsening. 
                    <p><br/></p>
                    In the embargo/blockade scenario, a viral infection is the main driver of the symptoms of long-COVID. However, it might not be SARS-Cov2 
                    the virus responsible for those symptoms. Patients also reported an improvement after the treatment with acyclovir and different derivatives 
                    of it. Currently, there are no reports supporting the efficacy of acyclovir or its derivatives against SARS-Cov2. Yet it inhibits the 
                    replication of the Epstein-Barr virus, a common reactivated virus in long-COVID. One possibility is that the Epstein-Barr virus takes a 
                    specific SARS-Cov2 fragment through recombination that continues to activate the immune system. Another possibility is the expression of 
                    subgenomic SARS-Cov2 fragments aided by the infection of a helper virus. In both cases, it might look like SARS-Cov2 viral persistence but 
                    it will be more like an even more opportunistic infection. This could also explain the inability of paxlovid and other SARS-Cov2 targeted 
                    treatments to alleviate long-COVID symptoms. 
                    <p><br/></p>
                    Although blockade (antagonist) of the adenosine receptor looks like the only alternative it might not be as straightforward as it seems. 
                    The different interactions due to interactions with other receptors as well as the kind of cell or tissue might obfuscate things. However, 
                    it seems like a promising target that could help a large proportion of patients. 
                    <p><br/></p>
                    Current understanding of the circadian rhythm and how is regulated hints at the existence of several oscillator networks that synchronize 
                    the circadian rhythm. The general oscillator is controlled by the central nervous system and consists of two oscillators one synchronized by 
                    the light/dark cycle and a second synchronized by temperature. Inside each cell, there&apos;s also an oscillator controlled by the dark/light cycle 
                    composed of the CLOCK, BMAL1, and Per proteins. Currently, a fatigue phenotype of long-COVID has been linked to specific SNPs in CLOCK. Thus 
                    it&apos;s likely that disruption of different pathways could lead to the same outcome. Treatment aimed to modulate adenosine signaling might not be 
                    successful in alleviating all the symptoms as the root cause might be CLOCK  and the inverse problem is also possible. 
                    <p><br/></p>
                    The importance of the adenosine receptor might be the result of sampling bias. Adenosine, cAMP, ATP, and other adenine derivatives are among 
                    the most widely studied molecules in biological systems due to their role as second messengers. Other nucleotide derivatives are also used as 
                    second messengers as well as dinucleotides. But they are less studied and understood. The possibility exists that something may be missing 
                    that describes and forecasts long-COVID with greater accuracy. 
                </p>
            </div>
        </div>
    )
}