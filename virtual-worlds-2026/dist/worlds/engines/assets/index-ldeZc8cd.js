(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const qa=1880,lo=1935,Xt=18,Mn={balanced:{id:"balanced",name:"Balanced Charter",description:"A modest town with ordinary cash, ordinary fear, and no faction in full command.",setup:{}},industrial:{id:"industrial",name:"Industrial Boom",description:"More starting cash, rail ambition, and a public already smelling smoke.",setup:{money:3800,trust:56,health:66,resilience:44,innovation:15,bankStability:64,inflation:10,policies:{regulation:"balanced",labor:"tolerate",media:"industry"},doctrines:{transport:"rail",money:"municipalBonds"}}},reform:{id:"reform",name:"Reform Coalition",description:"Higher trust, stricter rules, public works pressure, and less patience for graft.",setup:{money:3e3,trust:66,health:66,corruption:6,shadowEconomy:5,resilience:48,policies:{publicWorks:"aggressive",regulation:"strict",labor:"support",media:"independent",utility:"public"},doctrines:{money:"municipalBonds"}}},speculative:{id:"speculative",name:"Speculative Credit Town",description:"A bank-led start with fast credit pressure, early debt, and a ledger already tapping its foot.",setup:{money:2800,debt:360,liquidity:62,credit:36,inflation:0,bankStability:86,monetaryTrust:78,tradeConfidence:62,policies:{banking:"cautious",taxRate:"low",publicWorks:"balanced"},doctrines:{money:"bankCredit",transport:"gasoline"}}}},wt={road:{id:"road",name:"Road",category:"Transport",cost:24,color:6379594,height:.08,description:"Cheap local mobility. Improves access and growth.",effects:{maintenance:1,freight:1,resilience:.2}},residential:{id:"residential",name:"Residential Block",category:"Town",cost:85,color:13143899,height:.7,description:"Housing for workers and families. Needs jobs and trust to fill.",effects:{housing:85,powerDemand:2,maintenance:1,trust:.2}},mainStreet:{id:"mainStreet",name:"Main Street",category:"Town",cost:120,color:13806950,height:.62,description:"Commercial jobs and civic life. Loves roads, banks, and newspapers.",effects:{jobs:32,revenue:8,powerDemand:3,freightDemand:1,maintenance:2,trust:.2}},farm:{id:"farm",name:"Farm",category:"Town",cost:70,color:9221215,height:.22,description:"Food and early jobs. Diesel later makes farms stronger.",effects:{jobs:18,food:70,freightDemand:1,maintenance:1,resilience:.4}},factory:{id:"factory",name:"Factory",category:"Industry",cost:180,color:6251111,height:1.25,description:"Industrial jobs and money. Also smoke, injuries, and freight demand.",effects:{jobs:78,revenue:28,powerDemand:10,freightDemand:5,pollution:7,fireRisk:5,maintenance:5,health:-2}},machineShop:{id:"machineShop",name:"Machine Shop",category:"Industry",cost:300,color:7304309,height:.92,minYear:1890,description:"Turns skilled labor into repair capacity, factory output, and practical invention.",effects:{jobs:34,revenue:16,powerDemand:5,freightDemand:3,pollution:3,maintenance:5,innovation:8,resilience:3}},coalPlant:{id:"coalPlant",name:"Coal Steam Plant",category:"Power",cost:420,color:2960689,accent:2763306,height:1.45,description:"Large cheap power and industry confidence. Dirty, risky, and coal-dependent.",effects:{powerSupply:85,jobs:22,revenue:18,pollution:16,fireRisk:9,maintenance:10,fuelDependency:10,health:-5}},hydroPlant:{id:"hydroPlant",name:"Hydro Works",category:"Power",cost:650,color:4357029,height:.9,requiresWater:!0,description:"Clean reliable power near the river. Expensive and politically sensitive.",effects:{powerSupply:105,jobs:14,maintenance:6,resilience:6,trust:2,pollution:-3}},dcPlant:{id:"dcPlant",name:"DC Local Plant",category:"Power",cost:300,color:14726736,height:1,description:"Stable local current. Comfortable early, inefficient at scale.",effects:{powerSupply:42,jobs:12,powerDemand:1,maintenance:7,trust:1,resilience:1}},acPlant:{id:"acPlant",name:"AC Power House",category:"Power",cost:520,color:7060709,height:1.2,description:"Scalable grid power. Needs substations, education, and public trust.",effects:{powerSupply:95,jobs:16,maintenance:9,innovation:2,resilience:-1}},substation:{id:"substation",name:"AC Substation",category:"Power",cost:180,color:10410479,height:.55,description:"Extends grid reliability and reduces cascade risk.",effects:{powerSupply:12,powerDemand:1,maintenance:3,resilience:2}},powerLine:{id:"powerLine",name:"Power Line",category:"Power",cost:35,color:11716559,height:.25,description:"Cheap grid reach. Improves supply coverage but adds maintenance.",effects:{powerSupply:2,maintenance:1,resilience:.2}},gasolineDepot:{id:"gasolineDepot",name:"Gasoline Depot",category:"Transport",cost:240,color:12865334,height:.75,description:"Fast flexible service mobility. Fire risk and fuel dependency follow.",effects:{jobs:18,freight:16,revenue:10,fuelDependency:8,fireRisk:8,pollution:3,maintenance:4}},dieselDepot:{id:"dieselDepot",name:"Diesel Depot",category:"Transport",cost:330,color:4087102,height:.78,description:"Freight, farms, and winter reliability. Noisy, smoky, fuel-hungry.",effects:{jobs:22,freight:34,revenue:12,fuelDependency:11,pollution:6,maintenance:6,resilience:4}},rail:{id:"rail",name:"Rail Track",category:"Transport",cost:55,color:3422266,height:.1,description:"Heavy freight corridor. Best with a station or rail doctrine.",effects:{freight:5,maintenance:2,pollution:1}},railStation:{id:"railStation",name:"Freight Station",category:"Transport",cost:360,color:7889482,height:.85,description:"Turns track into economic muscle.",effects:{jobs:26,freight:52,revenue:16,powerDemand:3,maintenance:7}},streetcar:{id:"streetcar",name:"Electric Streetcar",category:"Transport",cost:390,color:9418953,height:.45,description:"Compact growth and trust. Needs a stable electric grid.",effects:{jobs:16,freight:8,powerDemand:7,maintenance:7,trust:4,pollution:-2}},grainElevator:{id:"grainElevator",name:"Grain Elevator",category:"Economy",cost:260,color:13084777,height:1.05,minYear:1888,description:"Stores harvests, steadies food prices, and turns farms into freight business.",effects:{jobs:16,food:42,freight:18,revenue:14,freightDemand:2,maintenance:4,tradeConfidence:3}},school:{id:"school",name:"School",category:"Civic",cost:210,color:14141067,height:.7,description:"Education, trust, innovation, and lower panic.",effects:{jobs:12,powerDemand:2,maintenance:5,education:7,innovation:5,trust:4}},library:{id:"library",name:"Library",category:"Civic",cost:260,color:12561057,height:.8,description:"Knowledge, calm, and civic memory.",effects:{jobs:8,powerDemand:2,maintenance:4,education:9,innovation:4,trust:3}},townHall:{id:"townHall",name:"Town Hall",category:"Civic",cost:380,color:15065039,height:1,description:"Legitimacy and policy capacity. Corruption hurts more when this is weak.",effects:{jobs:16,powerDemand:3,maintenance:8,trust:7,corruption:-2}},newspaper:{id:"newspaper",name:"Newspaper Office",category:"Civic",cost:220,color:12034168,height:.7,description:"Turns events into belief. Helpful or dangerous depending on posture.",effects:{jobs:14,revenue:5,powerDemand:2,maintenance:3,trust:2,education:2}},telegraphOffice:{id:"telegraphOffice",name:"Telegraph Office",category:"Economy",cost:300,color:11967348,height:.72,minYear:1885,description:"Moves prices, rumors, and dispatches faster than wagons can apologize.",effects:{jobs:12,revenue:12,powerDemand:2,maintenance:4,innovation:5,tradeConfidence:8,monetaryTrust:2}},bank:{id:"bank",name:"Bank",category:"Economy",cost:320,color:11121038,height:.9,description:"Credit, growth, and the possibility of panics.",effects:{jobs:18,revenue:26,powerDemand:2,maintenance:4,innovation:2,corruption:1}},insuranceOffice:{id:"insuranceOffice",name:"Insurance Office",category:"Economy",cost:260,color:9414027,height:.72,minYear:1890,description:"Prices risk before fire, flood, and speculation price it for you.",effects:{jobs:12,revenue:12,powerDemand:1,maintenance:3,fireRisk:-6,bankStability:5,tradeConfidence:4}},patentOffice:{id:"patentOffice",name:"Patent Office",category:"Economy",cost:380,color:14075285,height:.84,minYear:1895,minInnovation:22,description:"Turns inventors into paperwork, paperwork into capital, and capital into new trouble.",effects:{jobs:14,revenue:10,powerDemand:2,maintenance:5,innovation:12,credit:4,corruption:1}},sheriff:{id:"sheriff",name:"Sheriff Office",category:"Civic",cost:230,color:4746891,height:.72,description:"Law, order, lower fire spread, and enforcement cost.",effects:{jobs:14,powerDemand:2,maintenance:6,trust:2,shadow:-4,fireRisk:-2}},fireStation:{id:"fireStation",name:"Fire Station",category:"Civic",cost:250,color:11880501,height:.78,description:"Protects gasoline, factories, and wooden neighborhoods.",effects:{jobs:12,powerDemand:2,maintenance:6,fireRisk:-10,resilience:5,trust:2}},courthouse:{id:"courthouse",name:"Courthouse",category:"Civic",cost:360,color:14078142,height:.96,minYear:1886,description:"Makes graft slower, disputes duller, and legitimacy slightly less accidental.",effects:{jobs:18,powerDemand:2,maintenance:8,trust:5,corruption:-6,shadow:-2}},clinic:{id:"clinic",name:"Clinic",category:"Civic",cost:300,color:14934230,height:.78,description:"Health and resilience against industrial costs.",effects:{jobs:18,powerDemand:4,maintenance:8,health:9,trust:3,resilience:2}},sewerWorks:{id:"sewerWorks",name:"Sewer Works",category:"Civic",cost:540,color:5860720,height:.66,minYear:1890,requiresWater:!0,description:"Converts debt, pipes, and unpleasant realism into public health.",effects:{jobs:18,powerDemand:4,maintenance:10,health:14,resilience:10,pollution:-3,trust:2}},temperanceHall:{id:"temperanceHall",name:"Temperance Hall",category:"Social",cost:170,color:14209456,height:.65,description:"Moral reform and church pressure. Can make prohibition tempting.",effects:{jobs:6,maintenance:2,trust:3,shadow:-1,corruption:-.5}},saloon:{id:"saloon",name:"Saloon",category:"Social",cost:150,color:10180664,height:.62,description:"Revenue, cohesion, and visible disorder.",effects:{jobs:18,revenue:20,powerDemand:1,maintenance:2,trust:1,shadow:2,fireRisk:2}},speakeasy:{id:"speakeasy",name:"Speakeasy",category:"Shadow",cost:210,color:6045026,height:.55,unlock:n=>n.policies.alcohol==="prohibition"||n.shadowEconomy>=28,description:"Illegal revenue leakage and corruption. Appears when prohibition or shadow power rises.",effects:{jobs:12,revenue:18,maintenance:1,trust:-1,shadow:8,corruption:5}},unionHall:{id:"unionHall",name:"Union Hall",category:"Social",cost:240,color:9390653,height:.66,description:"Worker power, safety, and strike pressure if ignored.",effects:{jobs:6,maintenance:3,health:4,trust:4,corruption:-1}},settlementHouse:{id:"settlementHouse",name:"Settlement House",category:"Social",cost:220,color:13280125,height:.66,minYear:1892,description:"Turns neighbors, schooling, and practical care into trust the ledger can measure.",effects:{jobs:10,powerDemand:1,maintenance:5,health:6,trust:6,shadow:-4,education:3}},radioStation:{id:"radioStation",name:"Radio Station",category:"Social",cost:420,color:7180198,height:.78,minYear:1920,minInnovation:35,description:"Broadcasts market weather, civic myth, and panic with equal technical confidence.",effects:{jobs:14,revenue:8,powerDemand:5,maintenance:6,trust:5,education:4,innovation:6,tradeConfidence:4}},publicWorks:{id:"publicWorks",name:"Public Works Yard",category:"Civic",cost:280,color:8884355,height:.62,description:"Roads, sewers, bridges, and disaster recovery.",effects:{jobs:20,freight:8,powerDemand:2,maintenance:5,resilience:9,health:3}},waterPump:{id:"waterPump",name:"Water Pump",category:"Civic",cost:260,color:6268082,height:.55,requiresWater:!0,description:"Health and fire resilience near the river.",effects:{jobs:8,powerDemand:3,maintenance:5,health:6,fireRisk:-4,resilience:4}},park:{id:"park",name:"Civic Square",category:"Social",cost:120,color:7316587,height:.18,description:"Trust, health, and lower heat from industrial choices.",effects:{maintenance:2,trust:4,health:3,pollution:-2,resilience:1}},batteryHouse:{id:"batteryHouse",name:"Battery House",category:"Power",cost:520,color:9419472,height:.58,minYear:1900,minInnovation:30,description:"Stores a little power and a lot of confidence for outages and critical services.",effects:{powerSupply:18,powerDemand:2,maintenance:8,resilience:14,innovation:3,fireRisk:2}}},Si={fireCode:{id:"fireCode",name:"Fire Code",cost:360,minYear:1882,description:"Mandate safer storage, inspections, and exits. Less fire, more grumbling paperwork.",effects:{fireRisk:-12,resilience:4,maintenance:3,trust:2},headline:"Fire Code Passes After Council Discovers Wood Burns",summary:"Inspections and safer storage reduce disaster risk, though every shed now owns an opinion."},sewerBond:{id:"sewerBond",name:"Sewer Bond",cost:640,debt:420,minYear:1890,description:"Finance underground public health. The pipes are invisible; the debt is not.",effects:{health:10,resilience:8,pollution:-4,maintenance:7,trust:3},headline:"Sewer Bond Wins; Streets Smell Less Like Policy",summary:"Public health rises with buried infrastructure and a tidy new entry in the debt ledger."},bankExaminers:{id:"bankExaminers",name:"Bank Examiners",cost:300,minYear:1893,description:"Slow speculative credit and make bank books more boring, which is the point.",effects:{bankStability:12,credit:-5,corruption:-2,monetaryTrust:5,maintenance:3},headline:"Bank Examiners Make Confidence Tedious Again",summary:"Speculation cools as balance sheets become less creative and more legible."},ruralElectrification:{id:"ruralElectrification",name:"Rural Electric Co-op",cost:720,debt:360,minYear:1915,minInnovation:34,description:"Stretch practical power beyond downtown. Expensive, popular, and maintenance-hungry.",effects:{powerSupply:22,powerDemand:3,resilience:8,trust:5,maintenance:8,innovation:4},headline:"Rural Co-op Carries Current Past the Last Porch",summary:"Outlying districts gain service and trust while maintenance crews gain calendars."},antiGraftAudit:{id:"antiGraftAudit",name:"Anti-Graft Audit",cost:280,minYear:1884,description:"Open the books, annoy the machine, and recover a little civic oxygen.",effects:{corruption:-12,trust:5,shadow:-3,maintenance:2},headline:"Audit Finds Ledger With Too Many Convenient Smudges",summary:"Public trust rises as graft slows down and several officials rediscover handwriting."},laborCompact:{id:"laborCompact",name:"Labor Compact",cost:420,minYear:1898,description:"Negotiate safety and wages before the whistles stop negotiating for you.",effects:{trust:6,health:5,fireRisk:-4,maintenance:8,revenue:-3},headline:"Labor Compact Keeps Whistles Blowing and Speeches Shorter",summary:"Worker safety and trust improve, though payroll learns a heavier step."},wireService:{id:"wireService",name:"Regional Wire Service",cost:340,minYear:1900,description:"Connect the newspaper, banks, and stations to regional markets and faster rumor control.",effects:{tradeConfidence:9,innovation:5,trust:3,monetaryTrust:2,maintenance:4},headline:"Wire Service Gives Facts a Fighting Chance Against Rumor",summary:"Market confidence rises as the town learns the difference between news and shouting."}},Bo={taxRate:{label:"Tax Rate",options:{low:{label:"Low",description:"Growth and trust, but thin public revenue."},balanced:{label:"Balanced",description:"Reliable revenue without too much revolt."},high:{label:"High",description:"More city capacity, less patience, more evasion."}}},publicWorks:{label:"Public Works",options:{minimal:{label:"Minimal",description:"Cheap now, brittle later."},balanced:{label:"Balanced",description:"Moderate road, health, and resilience gains."},aggressive:{label:"Aggressive",description:"Expensive infrastructure push with real resilience."}}},regulation:{label:"Regulation",options:{loose:{label:"Loose",description:"Industry runs hot. So do fires and scandals."},balanced:{label:"Balanced",description:"Acceptable risks and costs."},strict:{label:"Strict",description:"Safer and cleaner, but slower and pricier."}}},alcohol:{label:"Alcohol Policy",options:{legal:{label:"Legal Saloons",description:"Revenue and social life, plus disorder."},regulated:{label:"Regulated Saloons",description:"Moderate revenue, moderate trouble."},prohibition:{label:"Prohibition",description:"Visible reform, hidden bootlegging and graft."}}},utility:{label:"Utility Ownership",options:{private:{label:"Private Franchise",description:"Cheaper expansion, monopoly and leakage risk."},mixed:{label:"Mixed",description:"Control and flexibility in uneasy balance."},public:{label:"Public Utility",description:"Trust when it works, blame when it fails."}}},labor:{label:"Labor Policy",options:{suppress:{label:"Suppress Unions",description:"Short-term output, long-term strike pressure."},tolerate:{label:"Tolerate Unions",description:"Uneasy but workable labor peace."},support:{label:"Negotiate/Support",description:"Worker trust and safety with higher costs."}}},media:{label:"Media Posture",options:{independent:{label:"Independent Press",description:"Legitimacy and clearer warnings."},booster:{label:"Booster Paper",description:"Growth optimism and hidden weak spots."},sensational:{label:"Sensational Paper",description:"Scandals surface, panic travels."},industry:{label:"Industry-Owned Paper",description:"Industrial confidence, legitimacy risk."}}},banking:{label:"Banking Policy",options:{cautious:{label:"Cautious Banks",description:"Stable credit, slower growth, fewer panics."},balanced:{label:"Balanced Credit",description:"Moderate lending and ordinary anxiety."},speculative:{label:"Loose/Speculative Credit",description:"Fast growth with sweaty ledgers and crash risk."}}}},Dn={electric:{label:"Electric Doctrine",options:{dc:{label:"DC Local",description:"Local stability and lower fear, weak large-town range."},ac:{label:"AC Grid",description:"Scales power and hydro, but can create fear and cascade risks."},hybrid:{label:"Hybrid Grid",description:"Costly but resilient and efficient in educated towns."}}},transport:{label:"Transport Doctrine",options:{horse:{label:"Horse/Local",description:"Low fuel dependency, limited freight and growth."},gasoline:{label:"Gasoline Mobility",description:"Flexible commercial growth, fire and fuel exposure."},diesel:{label:"Diesel Freight",description:"Strong farms and freight, dirtier fuel dependence."},rail:{label:"Rail-First",description:"Huge freight corridors, coal/water and maintenance burden."},streetcar:{label:"Streetcar Compact City",description:"Trust and density if the electric grid holds."}}},money:{label:"Money Engine",options:{hardMoney:{label:"Hard Money",description:"Stable prices and outside confidence, but tight credit and harsher downturns."},bimetal:{label:"Silver/Bimetal",description:"Frontier growth and debtor relief with inflation and faction fights."},greenbacks:{label:"Public Paper Money",description:"Flexible public spending and debt relief with trust and inflation pressure."},bankCredit:{label:"Bank Credit Expansion",description:"Housing, factories, and speculation. Growth now, panic later."},municipalBonds:{label:"Municipal Bonds",description:"Big public works before the town can fully afford them. Debt service follows."},companyScrip:{label:"Company Scrip",description:"Factory growth through company money, worker anger, and legitimacy loss."},localScrip:{label:"Emergency Local Scrip",description:"Keeps local trade alive in crisis while outsiders lose confidence."}}}},xi=[{id:"first-grid",name:"First Useful Grid",goal:"Own at least 6 roads, rails, or power lines.",rewardLabel:"+$180, +3 resilience",condition:({counts:n})=>(n.road??0)+(n.rail??0)+(n.powerLine??0)>=6,reward:{money:180,resilience:3},headline:"First Useful Grid Gives Mud a Timetable",summary:"The town now has enough connective tissue to pretend its plans are intentional."},{id:"first-power",name:"First Real Power",goal:"Build coal, hydro, DC, AC, or battery power.",rewardLabel:"+4 trust, +4 innovation",condition:({counts:n})=>(n.coalPlant??0)+(n.hydroPlant??0)+(n.dcPlant??0)+(n.acPlant??0)+(n.batteryHouse??0)>0,reward:{trust:4,innovation:4},headline:"Town Finds an Engine Larger Than Committee Breath",summary:"Reliable power changes the civic mood from hopeful candles to dangerous ambition."},{id:"freight-proof",name:"Freight Proof",goal:"Reach 100% freight reliability with at least 300 people.",rewardLabel:"+$260, +4 trade confidence",condition:({state:n,stats:e})=>n.population>=300&&e.freightReliability>=1,reward:{money:260,tradeConfidence:4},headline:"Freight Arrives Before Excuses",summary:"Goods begin moving often enough that merchants call it confidence instead of luck."},{id:"civic-care",name:"Civic Care Web",goal:"Reach 35% civic coverage.",rewardLabel:"+5 health, +5 trust",condition:({stats:n})=>n.civicCoverage>=35,reward:{health:5,trust:5},headline:"Care Becomes Infrastructure",summary:"Schools, clinics, parks, pumps, and neighbors start doing work the budget cannot spell."},{id:"money-confidence",name:"Money Holds Together",goal:"Reach 65 monetary trust and 60 bank stability.",rewardLabel:"+$220, +5 liquidity",condition:({stats:n})=>n.monetaryTrust>=65&&n.bankStability>=60,reward:{money:220,liquidity:5},headline:"Money Holds Still Long Enough to Be Useful",summary:"Creditors, farmers, and shopkeepers briefly agree that a dollar means something."},{id:"anti-shadow",name:"Streetlight Republic",goal:"Keep corruption and shadow economy below 20 after 1890.",rewardLabel:"+6 trust, +4 monetary trust",condition:({year:n,stats:e})=>n>=1890&&e.corruption<20&&e.shadowEconomy<20,reward:{trust:6,monetaryTrust:4},headline:"Streetlights Make the Machine Squint",summary:"The town is not pure, but enough business happens in daylight to matter."},{id:"public-machinery",name:"Public Machinery",goal:"Complete 3 civic projects.",rewardLabel:"+6 resilience, +4 innovation",condition:({state:n})=>(n.completedProjects??[]).length>=3,reward:{resilience:6,innovation:4},headline:"Public Machinery Begins to Compound",summary:"Codes, pipes, audits, wires, and compacts begin acting like one machine."},{id:"modern-town",name:"Modern Town",goal:"Reach 900 people and 45 innovation.",rewardLabel:"+$500, +6 trade confidence",condition:({state:n,stats:e})=>n.population>=900&&e.innovation>=45,reward:{money:500,tradeConfidence:6},headline:"Modern Town Discovered Under Smoke and Paperwork",summary:"The settlement becomes too complicated to run on memory, charm, or one angry clerk."}],Wc=[{id:"bank-panic",headline:"Bank Credit Fuels Main Street Boom; Ledger Begins Sweating",summary:"Depositors discovered that confidence works best when nobody tries to redeem it at once.",condition:({state:n,stats:e})=>e.bankStability<45&&(e.credit>58||n.debt>1900),effect:{money:-260,trust:-8,monetaryTrust:-10,liquidity:-12,bankStability:-8,credit:-10}},{id:"gold-drain",headline:"Gold Men Praise Stability, Farmers Ask If Stability Can Pull a Plow",summary:"Hard money pleased outside creditors and starved local expansion at the same time.",condition:({state:n,stats:e})=>n.doctrines.money==="hardMoney"&&(n.debt>1500||e.liquidity<45),effect:{money:-110,trust:-3,liquidity:-8,credit:-5,monetaryTrust:3}},{id:"silver-fever",headline:"Silver Fever Reaches Farms Before It Reaches Bankers",summary:"Debtors cheered easier money while downtown bankers practiced grim faces.",condition:({state:n,counts:e})=>n.doctrines.money==="bimetal"&&e.farm>1,effect:{money:140,trust:2,inflation:7,credit:4,tradeConfidence:-5}},{id:"greenback-fight",headline:"Council Prints Confidence, Confidence Declines to Appear",summary:"Paper money kept public works moving and gave hard-money factions something to shout about.",condition:({state:n})=>n.doctrines.money==="greenbacks"&&(n.policies.publicWorks==="aggressive"||n.debt>1600),effect:{money:160,inflation:9,monetaryTrust:-7,trust:-3}},{id:"company-scrip-scandal",headline:"Company Scrip Accepted Everywhere, Provided Everywhere Is the Company Store",summary:"The mill payroll became a private currency, and the union hall suddenly had excellent attendance.",condition:({state:n,counts:e})=>n.doctrines.money==="companyScrip"&&(e.factory>1||e.unionHall>0),effect:{money:150,corruption:6,trust:-7,monetaryTrust:-8}},{id:"bond-default-scare",headline:"Bond-Funded Dam Opens; Future Taxpayers Asked to Enjoy the View",summary:"The infrastructure worked. The debt service also worked, unfortunately.",condition:({state:n,stats:e})=>(n.doctrines.money==="municipalBonds"||n.debt>2600)&&e.debtBurden>55,effect:{trust:-7,monetaryTrust:-6,money:-180,corruption:2}},{id:"counterfeit-scrip",headline:"Emergency Scrip Keeps Bread Moving, Outsiders Call It Fancy Wallpaper",summary:"Local paper kept shops open while counterfeiters treated civic need as an invitation.",condition:({state:n,stats:e})=>n.doctrines.money==="localScrip"||e.liquidity<35&&e.monetaryTrust<45,effect:{liquidity:8,tradeConfidence:-10,monetaryTrust:-8,corruption:6,shadow:5}},{id:"speculation-boom",headline:"Speculation Boom Makes Every Empty Lot Feel Underpriced",summary:"Loose credit turned mud into opportunity and opportunity into leverage.",condition:({state:n,stats:e})=>n.doctrines.money==="bankCredit"&&n.policies.banking==="speculative"&&e.bankStability>45,effect:{money:260,credit:10,inflation:6,bankStability:-6,corruption:2}},{id:"speculation-bust",headline:"Speculation Bust Discovers Buildings Still Need Tenants",summary:"The boom stopped, but the debt had already taken off its coat.",condition:({state:n,stats:e})=>n.doctrines.money==="bankCredit"&&e.bankStability<48&&e.inflation>45,effect:{money:-330,trust:-8,credit:-12,bankStability:-9,monetaryTrust:-7}},{id:"ac-panic",headline:"AC Lines Reach the Ridge, Local Paper Requests Calm",summary:"New wires brought power and rumors in equal measure. Education and a steady press kept the panic manageable.",condition:({state:n,stats:e})=>n.doctrines.electric==="ac"&&e.education<24&&e.trust<58,effect:{trust:-6,corruption:1}},{id:"substation-failure",headline:"Substation Failure Sends Half the Town Back to Lamps",summary:"A brittle grid exposed every unpaid maintenance bill at once.",condition:({state:n,stats:e})=>n.doctrines.electric!=="dc"&&e.powerReliability<.92&&e.resilience<42,effect:{money:-160,trust:-5,resilience:-3}},{id:"dc-spaghetti",headline:"DC Spaghetti Strangles Expansion Committee",summary:"Local current kept early blocks steady, then asked for a plant on every corner.",condition:({state:n,stats:e})=>n.doctrines.electric==="dc"&&e.population>900,effect:{money:-110,trust:-2}},{id:"coal-smoke",headline:"Coal Plant Doubles Output, Sun Files Complaint",summary:"The mills cheered and the clinic coughed. Output has a smell.",condition:({counts:n,stats:e})=>n.coalPlant>0&&e.pollution>42,effect:{health:-6,trust:-3}},{id:"mine-strike",headline:"Mine Strike Tightens the Town Belt",summary:"Heavy industry found out that workers are also an engine.",condition:({counts:n,state:e})=>n.factory+n.coalPlant+n.dieselDepot>=4&&e.policies.labor==="suppress",effect:{money:-180,trust:-6,freight:-6}},{id:"gasoline-fire",headline:"Gasoline Depot Turns Shortcut Into Bonfire",summary:"Flexible mobility proved very committed to combustion.",condition:({counts:n,stats:e})=>n.gasolineDepot>0&&e.fireRisk>38,effect:{money:-220,trust:-5,health:-3}},{id:"diesel-winter",headline:"Diesel Saves the Harvest, Residents Request New Lungs",summary:"The trucks did not sing, but they arrived when the horses did not.",condition:({state:n,counts:e})=>n.doctrines.transport==="diesel"&&e.farm+e.dieselDepot>=2,effect:{money:120,resilience:5,pollution:2}},{id:"fuel-shortage",headline:"Fuel Shortage Turns Progress Into a Queue",summary:"The town learned that mobility is not the same thing as independence.",condition:({stats:n})=>n.fuelDependency>50&&n.resilience<55,effect:{money:-160,freight:-8,trust:-4}},{id:"hydro-flood",headline:"Hydro Works Flexes, River Reminds Council Who Owns the Valley",summary:"Clean power came with geography attached.",condition:({counts:n})=>n.hydroPlant>0,effect:{money:-120,resilience:-2,powerSupply:10}},{id:"temperance-campaign",headline:"Temperance League Counts Saloons, Discovers Arithmetic",summary:"The moral engine is warming up in the church basement.",condition:({counts:n,state:e})=>n.saloon>1&&e.policies.alcohol!=="prohibition",effect:{trust:-2,shadow:2}},{id:"prohibition-backfire",headline:"Council Bans Saloons, Accidentally Invents Speakeasies",summary:"The visible vice went down. The invisible machinery got organized.",condition:({state:n})=>n.policies.alcohol==="prohibition",effect:{shadow:9,corruption:5,money:-90}},{id:"speakeasy-boom",headline:"Basements Become Boomtowns After Dark",summary:"The shadow economy discovered music, cash, and friendly inspectors.",condition:({counts:n,stats:e})=>n.speakeasy>0||e.shadowEconomy>45,effect:{money:90,shadow:5,corruption:4,trust:-2}},{id:"newspaper-scandal",headline:"Gazette Finds Ledger With Too Many Erasures",summary:"Corruption converts public money into private advantage until ink converts it into scandal.",condition:({stats:n,state:e})=>n.corruption>48||e.policies.media==="sensational",effect:{trust:-8,corruption:-4}},{id:"bond-panic",headline:"Bond Buyers Ask If Town Hall Has a Basement Full of Cash",summary:"Debt built roads faster than confidence could catch up.",condition:({state:n})=>n.debt>2300,effect:{money:-180,trust:-6,corruption:2}},{id:"public-works-triumph",headline:"Public Works Bond Passes; Streets Become Roads Instead of Suggestions",summary:"Taxes became culverts, culverts became trust, and the mud briefly lost.",condition:({state:n,counts:e})=>n.policies.publicWorks==="aggressive"&&e.publicWorks>0,effect:{trust:7,resilience:7,money:-80}},{id:"factory-accident",headline:"Factory Accident Converts Loose Policy Into Reform Speech",summary:"The machinery was efficient right up to the part where people had names.",condition:({state:n,counts:e,stats:t})=>n.policies.regulation==="loose"&&e.factory>1&&t.fireRisk>30,effect:{health:-7,trust:-7,money:-140}},{id:"union-strike",headline:"Union Strike Halts Whistles, Starts Speeches",summary:"Production paused while the town remembered wages are also infrastructure.",condition:({state:n,counts:e,stats:t})=>e.unionHall>0&&t.industrialPressure>38&&n.policies.labor!=="support",effect:{money:-150,trust:-3}},{id:"bank-boom",headline:"Bank Boom Lends Tomorrow to Today",summary:"Credit turned ambition into foundations and risk into fine print.",condition:({counts:n})=>n.bank>0,effect:{money:170,trust:2,corruption:1}},{id:"rumor-wave",headline:"Rumor Wave Reaches Main Street Before the Facts",summary:"Low education and loud papers make excellent rails for fear.",condition:({state:n,stats:e})=>e.education<20&&e.trust<50&&n.policies.media!=="independent",effect:{trust:-6,shadow:3}},{id:"machine-shop-breakthrough",headline:"Machine Shop Builds Part Nobody Can Name, Everyone Needs",summary:"A practical invention improves repairs, output, and the town habit of calling luck by a technical name.",condition:({counts:n,stats:e})=>n.machineShop>0&&e.innovation>32,effect:{money:180,innovation:5,resilience:2,freight:4}},{id:"grain-market-rally",headline:"Grain Elevator Turns Harvest Into Negotiating Position",summary:"Storage and rail timing let farmers sell with less desperation and more arithmetic.",condition:({counts:n,stats:e})=>n.grainElevator>0&&e.food>120,effect:{money:150,tradeConfidence:4,trust:2,inflation:-2}},{id:"courthouse-crackdown",headline:"Courthouse Makes Graft Walk Down Main Street in Daylight",summary:"The machine still turns, but the gears are slightly less hidden and much more embarrassed.",condition:({counts:n,stats:e})=>n.courthouse>0&&e.corruption>24,effect:{corruption:-7,trust:4,shadow:-2}},{id:"telegraph-rumor-check",headline:"Telegraph Beats Rumor to the Depot by Six Minutes",summary:"Fast dispatches help bankers, editors, and nervous shopkeepers agree on one reality for a while.",condition:({counts:n,state:e})=>n.telegraphOffice>0&&e.policies.media!=="sensational",effect:{trust:3,monetaryTrust:3,tradeConfidence:5}},{id:"insurance-rating-fight",headline:"Insurance Men Rate Fire Risk, Saloons Rate Insurance Men Poorly",summary:"Premiums make danger visible before flames do, which is useful and unpopular.",condition:({counts:n,stats:e})=>n.insuranceOffice>0&&e.fireRisk>26,effect:{fireRisk:-5,money:-70,bankStability:4,trust:1}},{id:"settlement-house-truce",headline:"Settlement House Turns Angry Queue Into Committee",summary:"Practical care and translation work lower street heat before the sheriff gets creative.",condition:({counts:n,stats:e})=>n.settlementHouse>0&&(e.shadowEconomy>24||e.trust<55),effect:{trust:5,health:3,shadow:-4}},{id:"radio-market-mood",headline:"Radio Carries Prices, Songs, and Mildly Improved Confidence",summary:"The town hears itself in public and briefly mistakes coordination for destiny.",condition:({counts:n})=>n.radioStation>0,effect:{tradeConfidence:5,trust:3,innovation:3,powerDemand:2}},{id:"civic-project-dividend",headline:"Civic Projects Compound, Accountants Discover a Feeling",summary:"Fire codes, audits, wires, and pipes begin working together like someone planned them.",condition:({state:n,stats:e})=>(n.completedProjects??[]).length>=3&&e.resilience>55,effect:{trust:5,resilience:4,maintenance:3,corruption:-2}}],ko=[{id:"sleepy-charter-town",title:"Sleepy Charter Town",condition:n=>n.development<30,summary:"The charter survived, but mostly as a polite promise. The town kept its books cleaner than its ambitions."},{id:"clean-power-republic",title:"Clean Power Republic",condition:n=>n.power>=70&&n.pollution>=70&&n.trust>=60,summary:"Your town turned wires, rivers, schools, and civic trust into a durable public machine."},{id:"diesel-freight-empire",title:"Diesel Freight Empire",condition:n=>n.freight>=78&&n.economy>=60&&n.pollution<62,summary:"Freight won the argument. The town moves anything, anywhere, and coughs while doing it."},{id:"coal-machine-town",title:"Coal Machine Town",condition:n=>n.economy>=70&&n.pollution<50&&n.health<60,summary:"The mills roared, the treasury smiled, and the clinic never got a quiet day."},{id:"dc-village-network",title:"DC Village Network",condition:(n,e)=>e.doctrines.electric==="dc"&&n.trust>=62&&n.population<55,summary:"Small districts stayed bright and neighborly, even if the horizon remained suspiciously close."},{id:"gasoline-sprawl-boomtown",title:"Gasoline Sprawl Boomtown",condition:(n,e)=>e.doctrines.transport==="gasoline"&&n.population>=62,summary:"The town learned to move fast, spread out, and keep a bucket near every shed."},{id:"progressive-public-works",title:"Progressive Public Works Town",condition:(n,e)=>e.policies.publicWorks==="aggressive"&&n.resilience>=70&&n.trust>=60,summary:"The public ledger became roads, pumps, schools, clinics, and a tax bill people almost forgave."},{id:"prohibition-noir",title:"Prohibition Noir Town",condition:n=>n.shadow<45||n.corruption<45,summary:"The law closed the front door and the town built a better back door."},{id:"company-machine-town",title:"Company Machine Town",condition:n=>n.economy>=70&&n.trust<48,summary:"Output was excellent. Legitimacy was outsourced and never delivered."},{id:"hard-money-fortress",title:"Hard Money Fortress",condition:(n,e)=>e.doctrines.money==="hardMoney"&&n.monetaryTrust>=70&&n.inflation>=75&&n.population<62,summary:"Prices stayed respectable, bankers slept well, and expansion kept asking permission."},{id:"credit-boomtown",title:"Credit Boomtown",condition:(n,e,t)=>e.doctrines.money==="bankCredit"&&n.population>=60&&t.debtBurden>=35,summary:"Credit built the town fast enough that the ledger had to jog behind it."},{id:"scrip-mill-republic",title:"Scrip Mill Republic",condition:(n,e)=>e.doctrines.money==="companyScrip"&&n.economy>=62&&n.trust<58,summary:"The mills paid, the company store accepted, and civic legitimacy stood outside with empty pockets."},{id:"greenback-public-works-state",title:"Greenback Public Works State",condition:(n,e)=>e.doctrines.money==="greenbacks"&&n.resilience>=62&&n.inflation<70,summary:"Paper money poured itself into pumps, roads, schools, and arguments about whether confidence is printable."},{id:"monetary-chaos-town",title:"Monetary Chaos Town",condition:n=>n.monetaryTrust<45&&n.inflation<45&&n.bankStability<50,summary:"Money became rumor with denominations. Trade survived by improvising and trusting nobody for long."},{id:"civic-engine-commonwealth",title:"Civic Engine Commonwealth",condition:(n,e,t)=>(e.completedProjects??[]).length>=4&&t.civicCoverage>=45&&n.trust>=65,summary:"The town built pipes, codes, courts, schools, and wires until civilization became a working apparatus."},{id:"wire-and-credit-republic",title:"Wire and Credit Republic",condition:(n,e,t)=>t.tradeConfidence>=78&&t.bankStability>=70&&n.innovation>=58,summary:"Information, credit, and cautious ambition moved faster than horses and slower than panic."},{id:"balanced-republic",title:"Balanced Republic",condition:()=>!0,summary:"No single engine ruled the town. Steel, ink, law, debt, and weather all got a vote."}],$a={taxRate:"balanced",publicWorks:"balanced",regulation:"balanced",alcohol:"regulated",utility:"mixed",labor:"tolerate",media:"independent",banking:"balanced"},Ya={electric:"dc",transport:"horse",money:"hardMoney"};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uo="180",Xc=0,zo=1,qc=2,ja=1,Ka=2,vn=3,Un=0,Nt=1,on=2,Ln=0,yi=1,Ho=2,Go=3,Vo=4,$c=5,Kn=100,Yc=101,jc=102,Kc=103,Zc=104,Jc=200,Qc=201,el=202,tl=203,xs=204,ys=205,nl=206,il=207,rl=208,sl=209,ol=210,al=211,cl=212,ll=213,ul=214,Ms=0,Ss=1,bs=2,bi=3,Es=4,Ts=5,ws=6,As=7,Za=0,dl=1,hl=2,In=0,fl=1,pl=2,ml=3,gl=4,_l=5,vl=6,xl=7,Ja=300,Ei=301,Ti=302,Rs=303,Cs=304,Lr=306,Ps=1e3,Jn=1001,Ds=1002,tn=1003,yl=1004,Ji=1005,an=1006,zr=1007,Qn=1008,un=1009,Qa=1010,ec=1011,ki=1012,ho=1013,ei=1014,xn=1015,Xi=1016,fo=1017,po=1018,zi=1020,tc=35902,nc=35899,ic=1021,rc=1022,en=1023,Hi=1026,Gi=1027,sc=1028,mo=1029,oc=1030,go=1031,_o=1033,yr=33776,Mr=33777,Sr=33778,br=33779,Ls=35840,Is=35841,Us=35842,Ns=35843,Fs=36196,Os=37492,Bs=37496,ks=37808,zs=37809,Hs=37810,Gs=37811,Vs=37812,Ws=37813,Xs=37814,qs=37815,$s=37816,Ys=37817,js=37818,Ks=37819,Zs=37820,Js=37821,Qs=36492,eo=36494,to=36495,no=36283,io=36284,ro=36285,so=36286,Ml=3200,Sl=3201,ac=0,bl=1,Pn="",$t="srgb",wi="srgb-linear",Tr="linear",Qe="srgb",ii=7680,Wo=519,El=512,Tl=513,wl=514,cc=515,Al=516,Rl=517,Cl=518,Pl=519,Xo=35044,qo="300 es",cn=2e3,wr=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,oo=180/Math.PI;function qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function Dl(n,e){return(n%e+e)%e}function Gr(n,e,t){return(1-t)*n+t*e}function Di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $i{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==m||d!==g){let p=1-a;const u=l*f+c*m+d*g+h*x,T=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const R=Math.sqrt(E),A=Math.atan2(R,u*T);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const S=a*T;if(l=l*p+f*S,c=c*p+m*S,d=d*p+g*S,h=h*p+x*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+d*h+l*m-c*f,e[t+1]=l*g+d*f+c*h-a*m,e[t+2]=c*g+d*m+a*f-l*h,e[t+3]=d*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"YXZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"ZXY":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"ZYX":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"YZX":this._x=f*d*h+c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h-f*m*g;break;case"XZY":this._x=f*d*h-c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vr.copy(this).projectOnVector(e),this.sub(Vr)}reflect(e){return this.sub(Vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vr=new O,$o=new $i;class Oe{constructor(e,t,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],g=i[8],x=r[0],p=r[3],u=r[6],T=r[1],E=r[4],S=r[7],R=r[2],A=r[5],P=r[8];return s[0]=o*x+a*T+l*R,s[3]=o*p+a*E+l*A,s[6]=o*u+a*S+l*P,s[1]=c*x+d*T+h*R,s[4]=c*p+d*E+h*A,s[7]=c*u+d*S+h*P,s[2]=f*x+m*T+g*R,s[5]=f*p+m*E+g*A,s[8]=f*u+m*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,g=t*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(d*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new Oe;function lc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ll(){const n=Ar("canvas");return n.style.display="block",n}const Yo={};function Vi(n){n in Yo||(Yo[n]=!0,console.warn(n))}function Il(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const jo=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ko=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ul(){const n={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Qe&&(r.r=yn(r.r),r.g=yn(r.g),r.b=yn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?Tr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wi]:{primaries:e,whitePoint:i,transfer:Tr,toXYZ:jo,fromXYZ:Ko,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:jo,fromXYZ:Ko,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}const Ye=Ul();function yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ri;class Nl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ri===void 0&&(ri=Ar("canvas")),ri.width=e.width,ri.height=e.height;const r=ri.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ri}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yn(t[i]/255)*255):t[i]=yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fl=0;class vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xr(r[o].image)):s.push(Xr(r[o]))}else s=Xr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ol=0;const qr=new O;class Ft extends Ri{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Jn,r=Jn,s=an,o=Qn,a=en,l=un,c=Ft.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=qi(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qr).x}get height(){return this.source.getSize(qr).y}get depth(){return this.source.getSize(qr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ja)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Ja;Ft.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(m+1)/2,R=(u+1)/2,A=(d+f)/4,P=(h+x)/4,L=(g+p)/4;return E>S&&E>R?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=P/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=L/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(h-x)/T,this.z=(f-d)/T,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ft(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new vo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Bl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uc extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kl extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yt):Yt.fromBufferAttribute(s,o),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qi.copy(i.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),er.subVectors(this.max,Li),si.subVectors(e.a,Li),oi.subVectors(e.b,Li),ai.subVectors(e.c,Li),bn.subVectors(oi,si),En.subVectors(ai,oi),Hn.subVectors(si,ai);let t=[0,-bn.z,bn.y,0,-En.z,En.y,0,-Hn.z,Hn.y,bn.z,0,-bn.x,En.z,0,-En.x,Hn.z,0,-Hn.x,-bn.y,bn.x,0,-En.y,En.x,0,-Hn.y,Hn.x,0];return!$r(t,si,oi,ai,er)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,si,oi,ai,er))?!1:(tr.crossVectors(bn,En),t=[tr.x,tr.y,tr.z],$r(t,si,oi,ai,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fn=[new O,new O,new O,new O,new O,new O,new O,new O],Yt=new O,Qi=new Yi,si=new O,oi=new O,ai=new O,bn=new O,En=new O,Hn=new O,Li=new O,er=new O,tr=new O,Gn=new O;function $r(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gn.fromArray(n,s);const a=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),d=i.dot(Gn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const zl=new Yi,Ii=new O,Yr=new O;class xo{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zl.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ii,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(Yr)),this.expandByPoint(Ii.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pn=new O,jr=new O,nr=new O,Tn=new O,Kr=new O,ir=new O,Zr=new O;class dc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jr.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(jr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(nr),a=Tn.dot(this.direction),l=-Tn.dot(nr),c=Tn.lengthSq(),d=Math.abs(1-o*o);let h,f,m,g;if(d>0)if(h=o*l-a,f=o*a-l,g=s*d,h>=0)if(f>=-g)if(f<=g){const x=1/d;h*=x,f*=x,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jr).addScaledVector(nr,f),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const i=pn.dot(this.direction),r=pn.dot(pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,i,r,s){Kr.subVectors(t,e),ir.subVectors(i,e),Zr.crossVectors(Kr,ir);let o=this.direction.dot(Zr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);const l=a*this.direction.dot(ir.crossVectors(Tn,ir));if(l<0)return null;const c=a*this.direction.dot(Kr.cross(Tn));if(c<0||l+c>o)return null;const d=-a*Tn.dot(Zr);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,o,a,l,c,d,h,f,m,g,x,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,h,f,m,g,x,p)}set(e,t,i,r,s,o,a,l,c,d,h,f,m,g,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ci.setFromMatrixColumn(e,0).length(),s=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,g=a*d,x=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,g=c*d,x=c*h;t[0]=f+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,g=c*d,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,g=a*d,x=a*h;t[0]=l*d,t[4]=g*c-m,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=x-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+x,t[5]=o*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*d,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hl,e,Gl)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),wn.crossVectors(i,kt),wn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),wn.crossVectors(i,kt)),wn.normalize(),rr.crossVectors(kt,wn),r[0]=wn.x,r[4]=rr.x,r[8]=kt.x,r[1]=wn.y,r[5]=rr.y,r[9]=kt.y,r[2]=wn.z,r[6]=rr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],g=i[2],x=i[6],p=i[10],u=i[14],T=i[3],E=i[7],S=i[11],R=i[15],A=r[0],P=r[4],L=r[8],M=r[12],y=r[1],C=r[5],N=r[9],k=r[13],W=r[2],V=r[6],q=r[10],K=r[14],H=r[3],se=r[7],de=r[11],ve=r[15];return s[0]=o*A+a*y+l*W+c*H,s[4]=o*P+a*C+l*V+c*se,s[8]=o*L+a*N+l*q+c*de,s[12]=o*M+a*k+l*K+c*ve,s[1]=d*A+h*y+f*W+m*H,s[5]=d*P+h*C+f*V+m*se,s[9]=d*L+h*N+f*q+m*de,s[13]=d*M+h*k+f*K+m*ve,s[2]=g*A+x*y+p*W+u*H,s[6]=g*P+x*C+p*V+u*se,s[10]=g*L+x*N+p*q+u*de,s[14]=g*M+x*k+p*K+u*ve,s[3]=T*A+E*y+S*W+R*H,s[7]=T*P+E*C+S*V+R*se,s[11]=T*L+E*N+S*q+R*de,s[15]=T*M+E*k+S*K+R*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],u=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+x*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+p*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-t*l*h+t*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],u=e[15],T=h*p*c-x*f*c+x*l*m-a*p*m-h*l*u+a*f*u,E=g*f*c-d*p*c-g*l*m+o*p*m+d*l*u-o*f*u,S=d*x*c-g*h*c+g*a*m-o*x*m-d*a*u+o*h*u,R=g*h*l-d*x*l-g*a*f+o*x*f+d*a*p-o*h*p,A=t*T+i*E+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=T*P,e[1]=(x*f*s-h*p*s-x*r*m+i*p*m+h*r*u-i*f*u)*P,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*P,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*P,e[4]=E*P,e[5]=(d*p*s-g*f*s+g*r*m-t*p*m-d*r*u+t*f*u)*P,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*u-t*l*u)*P,e[7]=(o*f*s-d*l*s+d*r*c-t*f*c-o*r*m+t*l*m)*P,e[8]=S*P,e[9]=(g*h*s-d*x*s-g*i*m+t*x*m+d*i*u-t*h*u)*P,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*u+t*a*u)*P,e[11]=(d*a*s-o*h*s-d*i*c+t*h*c+o*i*m-t*a*m)*P,e[12]=R*P,e[13]=(d*x*r-g*h*r+g*i*f-t*x*f-d*i*p+t*h*p)*P,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*p-t*a*p)*P,e[15]=(o*h*r-d*a*r+d*i*l-t*h*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,g=s*h,x=o*d,p=o*h,u=a*h,T=l*c,E=l*d,S=l*h,R=i.x,A=i.y,P=i.z;return r[0]=(1-(x+u))*R,r[1]=(m+S)*R,r[2]=(g-E)*R,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+u))*A,r[6]=(p+T)*A,r[7]=0,r[8]=(g+E)*P,r[9]=(p-T)*P,r[10]=(1-(f+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ci.set(r[0],r[1],r[2]).length();const o=ci.set(r[4],r[5],r[6]).length(),a=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const c=1/s,d=1/o,h=1/a;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=d,jt.elements[5]*=d,jt.elements[6]*=d,jt.elements[8]*=h,jt.elements[9]*=h,jt.elements[10]*=h,t.setFromRotationMatrix(jt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=cn,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===cn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===wr)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=cn,l=!1){const c=this.elements,d=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===cn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===wr)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ci=new O,jt=new dt,Hl=new O(0,0,0),Gl=new O(1,1,1),wn=new O,rr=new O,kt=new O,Zo=new dt,Jo=new $i;class dn{constructor(e=0,t=0,i=0,r=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jo.setFromEuler(this),this.setFromQuaternion(Jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vl=0;const Qo=new O,li=new $i,mn=new dt,sr=new O,Ui=new O,Wl=new O,Xl=new $i,ea=new O(1,0,0),ta=new O(0,1,0),na=new O(0,0,1),ia={type:"added"},ql={type:"removed"},ui={type:"childadded",child:null},Jr={type:"childremoved",child:null};class At extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new O,t=new dn,i=new $i,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Oe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(ea,e)}rotateY(e){return this.rotateOnAxis(ta,e)}rotateZ(e){return this.rotateOnAxis(na,e)}translateOnAxis(e,t){return Qo.copy(e).applyQuaternion(this.quaternion),this.position.add(Qo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ea,e)}translateY(e){return this.translateOnAxis(ta,e)}translateZ(e){return this.translateOnAxis(na,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sr.copy(e):sr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ui,sr,this.up):mn.lookAt(sr,Ui,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),li.setFromRotationMatrix(mn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ia),ui.child=e,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ia),ui.child=e,this.dispatchEvent(ui),ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,e,Wl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Xl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new O(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new O,gn=new O,Qr=new O,_n=new O,di=new O,hi=new O,ra=new O,es=new O,ts=new O,ns=new O,is=new ut,rs=new ut,ss=new ut;class Qt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kt.subVectors(r,t),gn.subVectors(i,t),Qr.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(gn),l=Kt.dot(Qr),c=gn.dot(gn),d=gn.dot(Qr),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,g=(o*d-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return is.setScalar(0),rs.setScalar(0),ss.setScalar(0),is.fromBufferAttribute(e,t),rs.fromBufferAttribute(e,i),ss.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(is,s.x),o.addScaledVector(rs,s.y),o.addScaledVector(ss,s.z),o}static isFrontFacing(e,t,i,r){return Kt.subVectors(i,t),gn.subVectors(e,t),Kt.cross(gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Kt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;di.subVectors(r,i),hi.subVectors(s,i),es.subVectors(e,i);const l=di.dot(es),c=hi.dot(es);if(l<=0&&c<=0)return t.copy(i);ts.subVectors(e,r);const d=di.dot(ts),h=hi.dot(ts);if(d>=0&&h<=d)return t.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(di,o);ns.subVectors(e,s);const m=di.dot(ns),g=hi.dot(ns);if(g>=0&&m<=g)return t.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(hi,a);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return ra.subVectors(s,r),a=(h-d)/(h-d+(m-g)),t.copy(r).addScaledVector(ra,a);const u=1/(p+x+f);return o=x*u,a=f*u,t.copy(i).addScaledVector(di,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},or={h:0,s:0,l:0};function os(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Dl(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=os(o,s,e+1/3),this.g=os(o,s,e),this.b=os(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=hc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ye.workingToColorSpace(Et.copy(this),e),Math.round(Ve(Et.r*255,0,255))*65536+Math.round(Ve(Et.g*255,0,255))*256+Math.round(Ve(Et.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=$t){Ye.workingToColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(or);const i=Gr(An.h,or.h,t),r=Gr(An.s,or.s,t),s=Gr(An.l,or.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new je;je.NAMES=hc;let $l=0;class ji extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=yi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xs,this.blendDst=ys,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xs&&(i.blendSrc=this.blendSrc),this.blendDst!==ys&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rr extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new O,ar=new Xe;let Yl=0;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yl++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xo,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xo&&(e.usage=this.usage),e}}class fc extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pc extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let jl=0;const Wt=new dt,as=new At,fi=new O,zt=new Yi,Ni=new Yi,xt=new O;class nn extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lc(e)?pc:fc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return as.lookAt(e),as.updateMatrix(),this.applyMatrix4(as.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(zt.min,Ni.min),zt.expandByPoint(xt),xt.addVectors(zt.max,Ni.max),zt.expandByPoint(xt)):(zt.expandByPoint(Ni.min),zt.expandByPoint(Ni.max))}zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)xt.fromBufferAttribute(a,c),l&&(fi.fromBufferAttribute(e,c),xt.add(fi)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new O,l[L]=new O;const c=new O,d=new O,h=new O,f=new Xe,m=new Xe,g=new Xe,x=new O,p=new O;function u(L,M,y){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),d.sub(c),h.sub(c),m.sub(f),g.sub(f);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(C),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(C),a[L].add(x),a[M].add(x),a[y].add(x),l[L].add(p),l[M].add(p),l[y].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,M=T.length;L<M;++L){const y=T[L],C=y.start,N=y.count;for(let k=C,W=C+N;k<W;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new O,S=new O,R=new O,A=new O;function P(L){R.fromBufferAttribute(r,L),A.copy(R);const M=a[L];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(A,M);const C=S.dot(l[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,C)}for(let L=0,M=T.length;L<M;++L){const y=T[L],C=y.start,N=y.count;for(let k=C,W=C+N;k<W;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,d=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*d;for(let u=0;u<d;u++)f[g++]=c[m++]}return new ln(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sa=new dt,Vn=new dc,cr=new xo,oa=new O,lr=new O,ur=new O,dr=new O,cs=new O,hr=new O,aa=new O,fr=new O;class He extends At{constructor(e=new nn,t=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(cs.fromBufferAttribute(h,e),o?hr.addScaledVector(cs,d):hr.addScaledVector(cs.sub(t),d))}t.add(hr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere),cr.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(cr.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(cr,oa)===null||Vn.origin.distanceToSquared(oa)>(e.far-e.near)**2))&&(sa.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(sa),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],u=o[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,R=E;S<R;S+=3){const A=a.getX(S),P=a.getX(S+1),L=a.getX(S+2);r=pr(this,u,e,i,c,d,h,A,P,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const T=a.getX(p),E=a.getX(p+1),S=a.getX(p+2);r=pr(this,o,e,i,c,d,h,T,E,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],u=o[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,R=E;S<R;S+=3){const A=S,P=S+1,L=S+2;r=pr(this,u,e,i,c,d,h,A,P,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const T=p,E=p+1,S=p+2;r=pr(this,o,e,i,c,d,h,T,E,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Kl(n,e,t,i,r,s,o,a){let l;if(e.side===Nt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Un,a),l===null)return null;fr.copy(a),fr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fr);return c<t.near||c>t.far?null:{distance:c,point:fr.clone(),object:n}}function pr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,lr),n.getVertexPosition(l,ur),n.getVertexPosition(c,dr);const d=Kl(n,e,t,i,lr,ur,dr,aa);if(d){const h=new O;Qt.getBarycoord(aa,lr,ur,dr,h),r&&(d.uv=Qt.getInterpolatedAttribute(r,a,l,c,h,new Xe)),s&&(d.uv1=Qt.getInterpolatedAttribute(s,a,l,c,h,new Xe)),o&&(d.normal=Qt.getInterpolatedAttribute(o,a,l,c,h,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};Qt.getNormal(lr,ur,dr,f.normal),d.face=f,d.barycoord=h}return d}class pt extends nn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2));function g(x,p,u,T,E,S,R,A,P,L,M){const y=S/P,C=R/L,N=S/2,k=R/2,W=A/2,V=P+1,q=L+1;let K=0,H=0;const se=new O;for(let de=0;de<q;de++){const ve=de*C-k;for(let ze=0;ze<V;ze++){const Ze=ze*y-N;se[x]=Ze*T,se[p]=ve*E,se[u]=W,c.push(se.x,se.y,se.z),se[x]=0,se[p]=0,se[u]=A>0?1:-1,d.push(se.x,se.y,se.z),h.push(ze/P),h.push(1-de/L),K+=1}}for(let de=0;de<L;de++)for(let ve=0;ve<P;ve++){const ze=f+ve+V*de,Ze=f+ve+V*(de+1),tt=f+(ve+1)+V*(de+1),qe=f+(ve+1)+V*de;l.push(ze,Ze,qe),l.push(Ze,tt,qe),H+=6}a.addGroup(m,H,M),m+=H,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=Ai(n[t]);for(const r in i)e[r]=i[r]}return e}function Zl(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Jl={clone:Ai,merge:Ct};var Ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ql,this.fragmentShader=eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Zl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gc extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new O,ca=new Xe,la=new Xe;class Jt extends gc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,ca,la),t.subVectors(la,ca)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class tu extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(pi,mi,e,t);r.layers=this.layers,this.add(r);const s=new Jt(pi,mi,e,t);s.layers=this.layers,this.add(s);const o=new Jt(pi,mi,e,t);o.layers=this.layers,this.add(o);const a=new Jt(pi,mi,e,t);a.layers=this.layers,this.add(a);const l=new Jt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _c extends Ft{constructor(e=[],t=Ei,i,r,s,o,a,l,c,d){super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nu extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _c(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pt(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Ai(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:Ln});s.uniforms.tEquirect.value=t;const o=new He(r,s),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=an),new tu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class _i extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iu={type:"move"};class ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iu)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ru extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const us=new O,su=new O,ou=new Oe;class $n{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=us.subVectors(i,t).cross(su.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(us),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ou.getNormalMatrix(e),r=this.coplanarPoint(us).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new xo,au=new Xe(.5,.5),mr=new O;class Mo{constructor(e=new $n,t=new $n,i=new $n,r=new $n,s=new $n,o=new $n){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],h=s[5],f=s[6],m=s[7],g=s[8],x=s[9],p=s[10],u=s[11],T=s[12],E=s[13],S=s[14],R=s[15];if(r[0].setComponents(c-o,m-d,u-g,R-T).normalize(),r[1].setComponents(c+o,m+d,u+g,R+T).normalize(),r[2].setComponents(c+a,m+h,u+x,R+E).normalize(),r[3].setComponents(c-a,m-h,u-x,R-E).normalize(),i)r[4].setComponents(l,f,p,S).normalize(),r[5].setComponents(c-l,m-f,u-p,R-S).normalize();else if(r[4].setComponents(c-l,m-f,u-p,R-S).normalize(),t===cn)r[5].setComponents(c+l,m+f,u+p,R+S).normalize();else if(t===wr)r[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){Wn.center.set(0,0,0);const t=au.distanceTo(e.center);return Wn.radius=.7071067811865476+t,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(mr.x=r.normal.x>0?e.max.x:e.min.x,mr.y=r.normal.y>0?e.max.y:e.min.y,mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vc extends Ft{constructor(e,t,i=ei,r,s,o,a=tn,l=tn,c,d=Hi,h=1){if(d!==Hi&&d!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xc extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zt extends nn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let g=0;const x=[],p=i/2;let u=0;T(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(m,2));function T(){const S=new O,R=new O;let A=0;const P=(t-e)/i;for(let L=0;L<=s;L++){const M=[],y=L/s,C=y*(t-e)+e;for(let N=0;N<=r;N++){const k=N/r,W=k*l+a,V=Math.sin(W),q=Math.cos(W);R.x=C*V,R.y=-y*i+p,R.z=C*q,h.push(R.x,R.y,R.z),S.set(V,P,q).normalize(),f.push(S.x,S.y,S.z),m.push(k,1-y),M.push(g++)}x.push(M)}for(let L=0;L<r;L++)for(let M=0;M<s;M++){const y=x[M][L],C=x[M+1][L],N=x[M+1][L+1],k=x[M][L+1];(e>0||M!==0)&&(d.push(y,C,k),A+=3),(t>0||M!==s-1)&&(d.push(C,N,k),A+=3)}c.addGroup(u,A,0),u+=A}function E(S){const R=g,A=new Xe,P=new O;let L=0;const M=S===!0?e:t,y=S===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),g++;const C=g;for(let N=0;N<=r;N++){const W=N/r*l+a,V=Math.cos(W),q=Math.sin(W);P.x=M*q,P.y=p*y,P.z=M*V,h.push(P.x,P.y,P.z),f.push(0,y,0),A.x=V*.5+.5,A.y=q*.5*y+.5,m.push(A.x,A.y),g++}for(let N=0;N<r;N++){const k=R+N,W=C+N;S===!0?d.push(W,W+1,k):d.push(W+1,W,k),L+=3}c.addGroup(u,L,S===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class So extends Zt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new So(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ir extends nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=t/l,m=[],g=[],x=[],p=[];for(let u=0;u<d;u++){const T=u*f-o;for(let E=0;E<c;E++){const S=E*h-s;g.push(S,-T,0),x.push(0,0,1),p.push(E/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<a;T++){const E=T+c*u,S=T+c*(u+1),R=T+1+c*(u+1),A=T+1+c*u;m.push(E,S,A),m.push(S,R,A)}this.setIndex(m),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class bo extends nn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let h=e;const f=(t-e)/r,m=new O,g=new Xe;for(let x=0;x<=r;x++){for(let p=0;p<=i;p++){const u=s+p/i*o;m.x=h*Math.cos(u),m.y=h*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,d.push(g.x,g.y)}h+=f}for(let x=0;x<r;x++){const p=x*(i+1);for(let u=0;u<i;u++){const T=u+p,E=T,S=T+i+1,R=T+i+2,A=T+1;a.push(E,S,A),a.push(S,R,A)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cr extends nn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new O,f=new O,m=[],g=[],x=[],p=[];for(let u=0;u<=i;u++){const T=[],E=u/i;let S=0;u===0&&o===0?S=.5/t:u===i&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const A=R/t;h.x=-e*Math.cos(r+A*s)*Math.sin(o+E*a),h.y=e*Math.cos(o+E*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(A+S,1-E),T.push(c++)}d.push(T)}for(let u=0;u<i;u++)for(let T=0;T<t;T++){const E=d[u][T+1],S=d[u][T],R=d[u+1][T],A=d[u+1][T+1];(u!==0||o>0)&&m.push(E,S,A),(u!==i-1||l<Math.PI)&&m.push(S,R,A)}this.setIndex(m),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eo extends nn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new O,h=new O,f=new O;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const x=g/r*s,p=m/i*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const x=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,u=(r+1)*(m-1)+g,T=(r+1)*m+g;o.push(x,p,T),o.push(p,u,T)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rt extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cu extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lu extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yc extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ds=new dt,ua=new O,da=new O;class uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ua.setFromMatrixPosition(e.matrixWorld),t.position.copy(ua),da.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(da),t.updateMatrixWorld(),ds.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class To extends gc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class du extends uu{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ha extends yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new du}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hu extends yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fu extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fa=new dt;class pu{constructor(e,t,i=0,r=1/0){this.ray=new dc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fa),this}intersectObject(e,t=!0,i=[]){return ao(e,this,i,t),i.sort(pa),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ao(e[r],this,i,t);return i.sort(pa),i}}function pa(n,e){return n.distance-e.distance}function ao(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ao(s[o],e,t,!0)}}function ma(n,e,t,i){const r=mu(i);switch(t){case ic:return n*e;case sc:return n*e/r.components*r.byteLength;case mo:return n*e/r.components*r.byteLength;case oc:return n*e*2/r.components*r.byteLength;case go:return n*e*2/r.components*r.byteLength;case rc:return n*e*3/r.components*r.byteLength;case en:return n*e*4/r.components*r.byteLength;case _o:return n*e*4/r.components*r.byteLength;case yr:case Mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sr:case br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Is:case Ns:return Math.max(n,16)*Math.max(e,8)/4;case Ls:case Us:return Math.max(n,8)*Math.max(e,8)/2;case Fs:case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zs:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ws:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $s:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ys:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case js:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ks:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zs:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Js:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qs:case eo:case to:return Math.ceil(n/4)*Math.ceil(e/4)*16;case no:case io:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ro:case so:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mu(n){switch(n){case un:case Qa:return{byteLength:1,components:1};case ki:case ec:case Xi:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case ei:case ho:case xn:return{byteLength:4,components:1};case tc:case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mc(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gu(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,d);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],x=h[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const x=h[m];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var _u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,th=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ih=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ah=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ch=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Eh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Th=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ah=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ch=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ph=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ih=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Oh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$h=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:_u,alphahash_pars_fragment:vu,alphamap_fragment:xu,alphamap_pars_fragment:yu,alphatest_fragment:Mu,alphatest_pars_fragment:Su,aomap_fragment:bu,aomap_pars_fragment:Eu,batching_pars_vertex:Tu,batching_vertex:wu,begin_vertex:Au,beginnormal_vertex:Ru,bsdfs:Cu,iridescence_fragment:Pu,bumpmap_pars_fragment:Du,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Iu,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Nu,color_fragment:Fu,color_pars_fragment:Ou,color_pars_vertex:Bu,color_vertex:ku,common:zu,cube_uv_reflection_fragment:Hu,defaultnormal_vertex:Gu,displacementmap_pars_vertex:Vu,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:qu,colorspace_fragment:$u,colorspace_pars_fragment:Yu,envmap_fragment:ju,envmap_common_pars_fragment:Ku,envmap_pars_fragment:Zu,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:ld,envmap_vertex:Qu,fog_vertex:ed,fog_pars_vertex:td,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:rd,lightmap_pars_fragment:sd,lights_lambert_fragment:od,lights_lambert_pars_fragment:ad,lights_pars_begin:cd,lights_toon_fragment:ud,lights_toon_pars_fragment:dd,lights_phong_fragment:hd,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:vd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:Sd,map_fragment:bd,map_pars_fragment:Ed,map_particle_fragment:Td,map_particle_pars_fragment:wd,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Rd,morphinstance_vertex:Cd,morphcolor_vertex:Pd,morphnormal_vertex:Dd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Id,normal_fragment_begin:Ud,normal_fragment_maps:Nd,normal_pars_fragment:Fd,normal_pars_vertex:Od,normal_vertex:Bd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:Hd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Vd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:$d,dithering_fragment:Yd,dithering_pars_fragment:jd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Qd,shadowmap_vertex:eh,shadowmask_pars_fragment:th,skinbase_vertex:nh,skinning_pars_vertex:ih,skinning_vertex:rh,skinnormal_vertex:sh,specularmap_fragment:oh,specularmap_pars_fragment:ah,tonemapping_fragment:ch,tonemapping_pars_fragment:lh,transmission_fragment:uh,transmission_pars_fragment:dh,uv_pars_fragment:hh,uv_pars_vertex:fh,uv_vertex:ph,worldpos_vertex:mh,background_vert:gh,background_frag:_h,backgroundCube_vert:vh,backgroundCube_frag:xh,cube_vert:yh,cube_frag:Mh,depth_vert:Sh,depth_frag:bh,distanceRGBA_vert:Eh,distanceRGBA_frag:Th,equirect_vert:wh,equirect_frag:Ah,linedashed_vert:Rh,linedashed_frag:Ch,meshbasic_vert:Ph,meshbasic_frag:Dh,meshlambert_vert:Lh,meshlambert_frag:Ih,meshmatcap_vert:Uh,meshmatcap_frag:Nh,meshnormal_vert:Fh,meshnormal_frag:Oh,meshphong_vert:Bh,meshphong_frag:kh,meshphysical_vert:zh,meshphysical_frag:Hh,meshtoon_vert:Gh,meshtoon_frag:Vh,points_vert:Wh,points_frag:Xh,shadow_vert:qh,shadow_frag:$h,sprite_vert:Yh,sprite_frag:jh},ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},sn={basic:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ct([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ct([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ct([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ct([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ct([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ct([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ct([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ct([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ct([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ct([ae.lights,ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};sn.physical={uniforms:Ct([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const gr={r:0,b:0,g:0},Xn=new dn,Kh=new dt;function Zh(n,e,t,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function x(E){let S=!1;const R=g(E);R===null?u(a,l):R&&R.isColor&&(u(R,1),S=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,S){const R=g(S);R&&(R.isCubeTexture||R.mapping===Lr)?(d===void 0&&(d=new He(new pt(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ai(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Xn.copy(S.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Kh.makeRotationFromEuler(Xn)),d.material.toneMapped=Ye.getTransfer(R.colorSpace)!==Qe,(h!==R||f!==R.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,h=R,f=R.version,m=n.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new He(new Ir(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ai(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(R.colorSpace)!==Qe,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,S){E.getRGB(gr,mc(n)),i.buffers.color.setClear(gr.r,gr.g,gr.b,S,o)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(a,l)},render:x,addToRenderList:p,dispose:T}}function Jh(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,C,N,k,W){let V=!1;const q=h(k,N,C);s!==q&&(s=q,c(s.object)),V=m(y,k,N,W),V&&g(y,k,N,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(y,C,N,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function h(y,C,N){const k=N.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let V=W[C.id];V===void 0&&(V={},W[C.id]=V);let q=V[k];return q===void 0&&(q=f(l()),V[k]=q),q}function f(y){const C=[],N=[],k=[];for(let W=0;W<t;W++)C[W]=0,N[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:k,object:y,attributes:{},index:null}}function m(y,C,N,k){const W=s.attributes,V=C.attributes;let q=0;const K=N.getAttributes();for(const H in K)if(K[H].location>=0){const de=W[H];let ve=V[H];if(ve===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),de===void 0||de.attribute!==ve||ve&&de.data!==ve.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function g(y,C,N,k){const W={},V=C.attributes;let q=0;const K=N.getAttributes();for(const H in K)if(K[H].location>=0){let de=V[H];de===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(de=y.instanceColor));const ve={};ve.attribute=de,de&&de.data&&(ve.data=de.data),W[H]=ve,q++}s.attributes=W,s.attributesNum=q,s.index=k}function x(){const y=s.newAttributes;for(let C=0,N=y.length;C<N;C++)y[C]=0}function p(y){u(y,0)}function u(y,C){const N=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;N[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),W[y]!==C&&(n.vertexAttribDivisor(y,C),W[y]=C)}function T(){const y=s.newAttributes,C=s.enabledAttributes;for(let N=0,k=C.length;N<k;N++)C[N]!==y[N]&&(n.disableVertexAttribArray(N),C[N]=0)}function E(y,C,N,k,W,V,q){q===!0?n.vertexAttribIPointer(y,C,N,W,V):n.vertexAttribPointer(y,C,N,k,W,V)}function S(y,C,N,k){x();const W=k.attributes,V=N.getAttributes(),q=C.defaultAttributeValues;for(const K in V){const H=V[K];if(H.location>=0){let se=W[K];if(se===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const de=se.normalized,ve=se.itemSize,ze=e.get(se);if(ze===void 0)continue;const Ze=ze.buffer,tt=ze.type,qe=ze.bytesPerElement,$=tt===n.INT||tt===n.UNSIGNED_INT||se.gpuType===ho;if(se.isInterleavedBufferAttribute){const Z=se.data,ee=Z.stride,De=se.offset;if(Z.isInstancedInterleavedBuffer){for(let we=0;we<H.locationSize;we++)u(H.location+we,Z.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let we=0;we<H.locationSize;we++)p(H.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let we=0;we<H.locationSize;we++)E(H.location+we,ve/H.locationSize,tt,de,ee*qe,(De+ve/H.locationSize*we)*qe,$)}else{if(se.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)u(H.location+Z,se.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Z=0;Z<H.locationSize;Z++)E(H.location+Z,ve/H.locationSize,tt,de,ve*qe,ve/H.locationSize*Z*qe,$)}}else if(q!==void 0){const de=q[K];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}T()}function R(){L();for(const y in i){const C=i[y];for(const N in C){const k=C[N];for(const W in k)d(k[W].object),delete k[W];delete C[N]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const C=i[y.id];for(const N in C){const k=C[N];for(const W in k)d(k[W].object),delete k[W];delete C[N]}delete i[y.id]}function P(y){for(const C in i){const N=i[C];if(N[y.id]===void 0)continue;const k=N[y.id];for(const W in k)d(k[W].object),delete k[W];delete N[y.id]}}function L(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function Qh(n,e,t){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,h){h!==0&&(n.drawArraysInstanced(i,c,d,h),t.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];t.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=d[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ef(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==en&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==xn&&!L)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function tf(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new $n,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,u=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?d(null):c();else{const T=s?0:i,E=T*4;let S=u.clippingState||null;l.value=S,S=d(g,f,E,m);for(let R=0;R!==E;++R)S[R]=t[R];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const u=m+x*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,S=m;E!==x;++E,S+=4)o.copy(h[E]).applyMatrix4(T,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function nf(n){let e=new WeakMap;function t(o,a){return a===Rs?o.mapping=Ei:a===Cs&&(o.mapping=Ti),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rs||a===Cs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nu(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const vi=4,ga=[.125,.215,.35,.446,.526,.582],Zn=20,hs=new To,_a=new je;let fs=null,ps=0,ms=0,gs=!1;const Yn=(1+Math.sqrt(5))/2,gi=1/Yn,va=[new O(-Yn,gi,0),new O(Yn,gi,0),new O(-gi,0,Yn),new O(gi,0,Yn),new O(0,Yn,-gi),new O(0,Yn,gi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],rf=new O;class xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=rf}=s;fs=this._renderer.getRenderTarget(),ps=this._renderer.getActiveCubeFace(),ms=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fs,ps,ms),this._renderer.xr.enabled=gs,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fs=this._renderer.getRenderTarget(),ps=this._renderer.getActiveCubeFace(),ms=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Xi,format:en,colorSpace:wi,depthBuffer:!1},r=ya(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sf(s)),this._blurMaterial=of(s,e,t)}return r}_compileMaterial(e){const t=new He(this._lodPlanes[0],e);this._renderer.compile(t,hs)}_sceneToCubeUV(e,t,i,r,s){const l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(_a),h.toneMapping=In,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new Rr({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),p=new He(new pt,x);let u=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,u=!0):(x.color.copy(_a),u=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[E]));const R=this._cubeSize;_r(r,S*R,E>2?R:0,R,R),h.setRenderTarget(r),u&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ei||e.mapping===Ti;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_r(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=va[(r-s-1)%va.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new He(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),x=s/g,p=isFinite(s)?1+Math.floor(d*x):Zn;p>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const u=[];let T=0;for(let P=0;P<Zn;++P){const L=P/x,M=Math.exp(-L*L/2);u.push(M),P===0?T+=M:P<p&&(T+=2*M)}for(let P=0;P<u.length;P++)u[P]=u[P]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const S=this._sizeLods[r],R=3*S*(r>E-vi?r-E+vi:0),A=4*(this._cubeSize-S);_r(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(h,hs)}}function sf(n){const e=[],t=[],i=[];let r=n;const s=n-vi+1+ga.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-vi?l=ga[o-n+vi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,x=3,p=2,u=1,T=new Float32Array(x*g*m),E=new Float32Array(p*g*m),S=new Float32Array(u*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,L=A>2?0:-1,M=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];T.set(M,x*g*A),E.set(f,p*g*A);const y=[A,A,A,A,A,A];S.set(y,u*g*A)}const R=new nn;R.setAttribute("position",new ln(T,x)),R.setAttribute("uv",new ln(E,p)),R.setAttribute("faceIndex",new ln(S,u)),e.push(R),r>vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ya(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function of(n,e,t){const i=new Float32Array(Zn),r=new O(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ma(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Sa(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function af(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rs||l===Cs,d=l===Ei||l===Ti;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new xa(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new xa(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lf(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let E=0,S=T.length;E<S;E+=3){const R=T[E+0],A=T[E+1],P=T[E+2];f.push(R,A,A,P,P,R)}}else if(g!==void 0){const T=g.array;x=g.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const R=E+0,A=E+1,P=E+2;f.push(R,A,A,P,P,R)}}else return;const p=new(lc(f)?pc:fc)(f,1);p.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function uf(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*o),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*o,g),t.update(m,i,g))}function d(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,i,1)}function h(f,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/o,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,x,0,g);let u=0;for(let T=0;T<g;T++)u+=m[T]*x[T];t.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function df(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hf(n,e,t){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*A*4*h),L=new uc(P,R,A,h);L.type=xn,L.needsUpdate=!0;const M=S*4;for(let C=0;C<h;C++){const N=u[C],k=T[C],W=E[C],V=R*A*4*C;for(let q=0;q<N.count;q++){const K=q*M;g===!0&&(r.fromBufferAttribute(N,q),P[V+K+0]=r.x,P[V+K+1]=r.y,P[V+K+2]=r.z,P[V+K+3]=0),x===!0&&(r.fromBufferAttribute(k,q),P[V+K+4]=r.x,P[V+K+5]=r.y,P[V+K+6]=r.z,P[V+K+7]=0),p===!0&&(r.fromBufferAttribute(W,q),P[V+K+8]=r.x,P[V+K+9]=r.y,P[V+K+10]=r.z,P[V+K+11]=W.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new Xe(R,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function ff(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Sc=new Ft,ba=new vc(1,1),bc=new uc,Ec=new kl,Tc=new _c,Ea=[],Ta=[],wa=new Float32Array(16),Aa=new Float32Array(9),Ra=new Float32Array(4);function Ci(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ea[r];if(s===void 0&&(s=new Float32Array(r),Ea[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ur(n,e){let t=Ta[e];t===void 0&&(t=new Int32Array(e),Ta[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function gf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function _f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function vf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Ra.set(i),n.uniformMatrix2fv(this.addr,!1,Ra),_t(t,i)}}function xf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Aa.set(i),n.uniformMatrix3fv(this.addr,!1,Aa),_t(t,i)}}function yf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;wa.set(i),n.uniformMatrix4fv(this.addr,!1,wa),_t(t,i)}}function Mf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function Ef(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function Tf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function Rf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Cf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ba.compareFunction=cc,s=ba):s=Sc,t.setTexture2D(e||s,r)}function Pf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ec,r)}function Df(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tc,r)}function Lf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bc,r)}function If(n){switch(n){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return vf;case 35675:return xf;case 35676:return yf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return bf;case 35669:case 35673:return Ef;case 5125:return Tf;case 36294:return wf;case 36295:return Af;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return Lf}}function Uf(n,e){n.uniform1fv(this.addr,e)}function Nf(n,e){const t=Ci(e,this.size,2);n.uniform2fv(this.addr,t)}function Ff(n,e){const t=Ci(e,this.size,3);n.uniform3fv(this.addr,t)}function Of(n,e){const t=Ci(e,this.size,4);n.uniform4fv(this.addr,t)}function Bf(n,e){const t=Ci(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kf(n,e){const t=Ci(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zf(n,e){const t=Ci(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hf(n,e){n.uniform1iv(this.addr,e)}function Gf(n,e){n.uniform2iv(this.addr,e)}function Vf(n,e){n.uniform3iv(this.addr,e)}function Wf(n,e){n.uniform4iv(this.addr,e)}function Xf(n,e){n.uniform1uiv(this.addr,e)}function qf(n,e){n.uniform2uiv(this.addr,e)}function $f(n,e){n.uniform3uiv(this.addr,e)}function Yf(n,e){n.uniform4uiv(this.addr,e)}function jf(n,e,t){const i=this.cache,r=e.length,s=Ur(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sc,s[o])}function Kf(n,e,t){const i=this.cache,r=e.length,s=Ur(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ec,s[o])}function Zf(n,e,t){const i=this.cache,r=e.length,s=Ur(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tc,s[o])}function Jf(n,e,t){const i=this.cache,r=e.length,s=Ur(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bc,s[o])}function Qf(n){switch(n){case 5126:return Uf;case 35664:return Nf;case 35665:return Ff;case 35666:return Of;case 35674:return Bf;case 35675:return kf;case 35676:return zf;case 5124:case 35670:return Hf;case 35667:case 35671:return Gf;case 35668:case 35672:return Vf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return $f;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Jf}}class ep{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=If(t.type)}}class tp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qf(t.type)}}class np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const _s=/(\w+)(\])?(\[|\.)?/g;function Ca(n,e){n.seq.push(e),n.map[e.id]=e}function ip(n,e,t){const i=n.name,r=i.length;for(_s.lastIndex=0;;){const s=_s.exec(i),o=_s.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ca(t,c===void 0?new ep(a,n,e):new tp(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new np(a),Ca(t,h)),t=h}}}class Er{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ip(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Pa(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rp=37297;let sp=0;function op(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Da=new Oe;function ap(n){Ye._getMatrix(Da,Ye.workingColorSpace,n);const e=`mat3( ${Da.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Tr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function La(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+op(n.getShaderSource(e),a)}else return s}function cp(n,e){const t=ap(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lp(n,e){let t;switch(e){case fl:t="Linear";break;case pl:t="Reinhard";break;case ml:t="Cineon";break;case gl:t="ACESFilmic";break;case vl:t="AgX";break;case xl:t="Neutral";break;case _l:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vr=new O;function up(){Ye.getLuminanceCoefficients(vr);const n=vr.x.toFixed(4),e=vr.y.toFixed(4),t=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function hp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fi(n){return n!==""}function Ia(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ua(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(n){return n.replace(pp,gp)}const mp=new Map;function gp(n,e){let t=ke[e];if(t===void 0){const i=mp.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return co(t)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(n){return n.replace(_p,vp)}function vp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fa(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ka?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function yp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case Ti:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function Sp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Za:e="ENVMAP_BLENDING_MULTIPLY";break;case dl:e="ENVMAP_BLENDING_MIX";break;case hl:e="ENVMAP_BLENDING_ADD";break}return e}function bp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ep(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xp(t),c=yp(t),d=Mp(t),h=Sp(t),f=bp(t),m=dp(t),g=hp(s),x=r.createProgram();let p,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fi).join(`
`),u.length>0&&(u+=`
`)):(p=[Fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),u=[Fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?ke.tonemapping_pars_fragment:"",t.toneMapping!==In?lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,cp("linearToOutputTexel",t.outputColorSpace),up(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),o=co(o),o=Ia(o,t),o=Ua(o,t),a=co(a),a=Ia(a,t),a=Ua(a,t),o=Na(o),a=Na(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=T+p+o,S=T+u+a,R=Pa(r,r.VERTEX_SHADER,E),A=Pa(r,r.FRAGMENT_SHADER,S);r.attachShader(x,R),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(C){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x)||"",k=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(A)||"",V=N.trim(),q=k.trim(),K=W.trim();let H=!0,se=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,A);else{const de=La(r,R,"vertex"),ve=La(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+de+`
`+ve)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(q===""||K==="")&&(se=!1);se&&(C.diagnostics={runnable:H,programLog:V,vertexShader:{log:q,prefix:p},fragmentShader:{log:K,prefix:u}})}r.deleteShader(R),r.deleteShader(A),L=new Er(r,x),M=fp(r,x)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,rp)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let Tp=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ap(e),t.set(e,i)),i}}class Ap{constructor(e){this.id=Tp++,this.code=e,this.usedTimes=0}}function Rp(n,e,t,i,r,s,o){const a=new yo,l=new wp,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,y,C,N,k){const W=N.fog,V=k.geometry,q=M.isMeshStandardMaterial?N.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),H=K&&K.mapping===Lr?K.image.height:null,se=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=de!==void 0?de.length:0;let ze=0;V.morphAttributes.position!==void 0&&(ze=1),V.morphAttributes.normal!==void 0&&(ze=2),V.morphAttributes.color!==void 0&&(ze=3);let Ze,tt,qe,$;if(se){const Ke=sn[se];Ze=Ke.vertexShader,tt=Ke.fragmentShader}else Ze=M.vertexShader,tt=M.fragmentShader,l.update(M),qe=l.getVertexShaderID(M),$=l.getFragmentShaderID(M);const Z=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,We=!!M.map,St=!!M.matcap,w=!!K,st=!!M.aoMap,Ne=!!M.lightMap,Le=!!M.bumpMap,xe=!!M.normalMap,ot=!!M.displacementMap,ye=!!M.emissiveMap,Be=!!M.metalnessMap,vt=!!M.roughnessMap,ht=M.anisotropy>0,b=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,X=M.sheen>0,J=M.transmission>0,G=ht&&!!M.anisotropyMap,Te=b&&!!M.clearcoatMap,re=b&&!!M.clearcoatNormalMap,Se=b&&!!M.clearcoatRoughnessMap,be=F&&!!M.iridescenceMap,ne=F&&!!M.iridescenceThicknessMap,he=X&&!!M.sheenColorMap,Pe=X&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,le=!!M.specularColorMap,Fe=!!M.specularIntensityMap,D=J&&!!M.transmissionMap,ie=J&&!!M.thicknessMap,oe=!!M.gradientMap,pe=!!M.alphaMap,Q=M.alphaTest>0,Y=!!M.alphaHash,_e=!!M.extensions;let Ue=In;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const nt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:tt,defines:M.defines,customVertexShaderID:qe,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:wi,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:St,envMap:w,envMapMode:w&&K.mapping,envMapCubeUVHeight:H,aoMap:st,lightMap:Ne,bumpMap:Le,normalMap:xe,displacementMap:f&&ot,emissiveMap:ye,normalMapObjectSpace:xe&&M.normalMapType===bl,normalMapTangentSpace:xe&&M.normalMapType===ac,metalnessMap:Be,roughnessMap:vt,anisotropy:ht,anisotropyMap:G,clearcoat:b,clearcoatMap:Te,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:_,iridescence:F,iridescenceMap:be,iridescenceThicknessMap:ne,sheen:X,sheenColorMap:he,sheenRoughnessMap:Pe,specularMap:Ee,specularColorMap:le,specularIntensityMap:Fe,transmission:J,transmissionMap:D,thicknessMap:ie,gradientMap:oe,opaque:M.transparent===!1&&M.blending===yi&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:Y,combine:M.combine,mapUv:We&&x(M.map.channel),aoMapUv:st&&x(M.aoMap.channel),lightMapUv:Ne&&x(M.lightMap.channel),bumpMapUv:Le&&x(M.bumpMap.channel),normalMapUv:xe&&x(M.normalMap.channel),displacementMapUv:ot&&x(M.displacementMap.channel),emissiveMapUv:ye&&x(M.emissiveMap.channel),metalnessMapUv:Be&&x(M.metalnessMap.channel),roughnessMapUv:vt&&x(M.roughnessMap.channel),anisotropyMapUv:G&&x(M.anisotropyMap.channel),clearcoatMapUv:Te&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(M.sheenRoughnessMap.channel),specularMapUv:Ee&&x(M.specularMap.channel),specularColorMapUv:le&&x(M.specularColorMap.channel),specularIntensityMapUv:Fe&&x(M.specularIntensityMap.channel),transmissionMapUv:D&&x(M.transmissionMap.channel),thicknessMapUv:ie&&x(M.thicknessMap.channel),alphaMapUv:pe&&x(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xe||ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(We||pe),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ee,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===Qe,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(M.emissiveMap.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Nt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function u(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(T(y,M),E(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const y=g[M.type];let C;if(y){const N=sn[y];C=Jl.clone(N.uniforms)}else C=M.uniforms;return C}function R(M,y){let C;for(let N=0,k=d.length;N<k;N++){const W=d[N];if(W.cacheKey===y){C=W,++C.usedTimes;break}}return C===void 0&&(C=new Ep(n,y,M,s),d.push(C)),C}function A(M){if(--M.usedTimes===0){const y=d.indexOf(M);d[y]=d[d.length-1],d.pop(),M.destroy()}}function P(M){l.remove(M)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:d,dispose:L}}function Cp(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Pp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Oa(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ba(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,g,x,p){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},n[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=x,u.group=p),e++,u}function a(h,f,m,g,x,p){const u=o(h,f,m,g,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(h,f,m,g,x,p){const u=o(h,f,m,g,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(h,f){t.length>1&&t.sort(h||Pp),i.length>1&&i.sort(f||Oa),r.length>1&&r.sort(f||Oa)}function d(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function Dp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ba,n.set(i,[o])):r>=s.length?(o=new Ba,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new je};break;case"SpotLight":t={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Ip(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Up=0;function Np(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fp(n){const e=new Lp,t=Ip(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new dt,o=new dt;function a(c){let d=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,T=0,E=0,S=0,R=0,A=0,P=0;c.sort(Np);for(let M=0,y=c.length;M<y;M++){const C=c[M],N=C.color,k=C.intensity,W=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=N.r*k,h+=N.g*k,f+=N.b*k;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],k);P++}else if(C.isDirectionalLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,H=t.get(C);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=C.shadow.matrix,T++}i.directional[m]=q,m++}else if(C.isSpotLight){const q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(N).multiplyScalar(k),q.distance=W,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[x]=q;const K=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,K.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[x]=K.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=V,S++}x++}else if(C.isRectAreaLight){const q=e.get(C);q.color.copy(N).multiplyScalar(k),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=q,p++}else if(C.isPointLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const K=C.shadow,H=t.get(C);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=C.shadow.matrix,E++}i.point[g]=q,g++}else if(C.isHemisphereLight){const q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(k),q.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[u]=q,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==u||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==R||L.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,L.directionalLength=m,L.pointLength=g,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=u,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=R,L.numLightProbes=P,i.version=Up++)}function l(c,d){let h=0,f=0,m=0,g=0,x=0;const p=d.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){const E=c[u];if(E.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(E.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function ka(n){const e=new Fp(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Op(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ka(n),e.set(r,[a])):s>=o.length?(a=new ka(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zp(n,e,t){let i=new Mo;const r=new Xe,s=new Xe,o=new ut,a=new cu({depthPacking:Sl}),l=new lu,c={},d=t.maxTextureSize,h={[Un]:Nt,[Nt]:Un,[on]:on},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Bp,fragmentShader:kp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new He(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let u=this.type;this.render=function(A,P,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ln),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=u!==vn&&this.type===vn,W=u===vn&&this.type!==vn;for(let V=0,q=A.length;V<q;V++){const K=A[V],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||k===!0||W===!0){const ve=this.type!==vn?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new ti(r.x,r.y,ve),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const de=H.getViewportCount();for(let ve=0;ve<de;ve++){const ze=H.getViewport(ve);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),N.viewport(o),H.updateMatrices(K,ve),i=H.getFrustum(),S(P,L,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===vn&&T(H,L),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(M,y,C)};function T(A,P){const L=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,L,f,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,L,m,x,null)}function E(A,P,L,M){let y=null;const C=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=y.uuid,k=P.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let V=W[k];V===void 0&&(V=y.clone(),W[k]=V,P.addEventListener("dispose",R)),y=V}if(y.visible=P.visible,y.wireframe=P.wireframe,M===vn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=n.properties.get(y);N.light=L}return y}function S(A,P,L,M,y){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===vn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const k=e.update(A),W=A.material;if(Array.isArray(W)){const V=k.groups;for(let q=0,K=V.length;q<K;q++){const H=V[q],se=W[H.materialIndex];if(se&&se.visible){const de=E(A,se,M,y);A.onBeforeShadow(n,A,P,L,k,de,H),n.renderBufferDirect(L,null,k,de,A,H),A.onAfterShadow(n,A,P,L,k,de,H)}}}else if(W.visible){const V=E(A,W,M,y);A.onBeforeShadow(n,A,P,L,k,V,null),n.renderBufferDirect(L,null,k,V,A,null),A.onAfterShadow(n,A,P,L,k,V,null)}}const N=A.children;for(let k=0,W=N.length;k<W;k++)S(N[k],P,L,M,y)}function R(A){A.target.removeEventListener("dispose",R);for(const L in c){const M=c[L],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Hp={[Ms]:Ss,[bs]:ws,[Es]:As,[bi]:Ts,[Ss]:Ms,[ws]:bs,[As]:Es,[Ts]:bi};function Gp(n,e){function t(){let D=!1;const ie=new ut;let oe=null;const pe=new ut(0,0,0,0);return{setMask:function(Q){oe!==Q&&!D&&(n.colorMask(Q,Q,Q,Q),oe=Q)},setLocked:function(Q){D=Q},setClear:function(Q,Y,_e,Ue,nt){nt===!0&&(Q*=Ue,Y*=Ue,_e*=Ue),ie.set(Q,Y,_e,Ue),pe.equals(ie)===!1&&(n.clearColor(Q,Y,_e,Ue),pe.copy(ie))},reset:function(){D=!1,oe=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,ie=!1,oe=null,pe=null,Q=null;return{setReversed:function(Y){if(ie!==Y){const _e=e.get("EXT_clip_control");Y?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ie=Y;const Ue=Q;Q=null,this.setClear(Ue)}},getReversed:function(){return ie},setTest:function(Y){Y?Z(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(Y){oe!==Y&&!D&&(n.depthMask(Y),oe=Y)},setFunc:function(Y){if(ie&&(Y=Hp[Y]),pe!==Y){switch(Y){case Ms:n.depthFunc(n.NEVER);break;case Ss:n.depthFunc(n.ALWAYS);break;case bs:n.depthFunc(n.LESS);break;case bi:n.depthFunc(n.LEQUAL);break;case Es:n.depthFunc(n.EQUAL);break;case Ts:n.depthFunc(n.GEQUAL);break;case ws:n.depthFunc(n.GREATER);break;case As:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Y}},setLocked:function(Y){D=Y},setClear:function(Y){Q!==Y&&(ie&&(Y=1-Y),n.clearDepth(Y),Q=Y)},reset:function(){D=!1,oe=null,pe=null,Q=null,ie=!1}}}function r(){let D=!1,ie=null,oe=null,pe=null,Q=null,Y=null,_e=null,Ue=null,nt=null;return{setTest:function(Ke){D||(Ke?Z(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(Ke){ie!==Ke&&!D&&(n.stencilMask(Ke),ie=Ke)},setFunc:function(Ke,hn,rn){(oe!==Ke||pe!==hn||Q!==rn)&&(n.stencilFunc(Ke,hn,rn),oe=Ke,pe=hn,Q=rn)},setOp:function(Ke,hn,rn){(Y!==Ke||_e!==hn||Ue!==rn)&&(n.stencilOp(Ke,hn,rn),Y=Ke,_e=hn,Ue=rn)},setLocked:function(Ke){D=Ke},setClear:function(Ke){nt!==Ke&&(n.clearStencil(Ke),nt=Ke)},reset:function(){D=!1,ie=null,oe=null,pe=null,Q=null,Y=null,_e=null,Ue=null,nt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,T=null,E=null,S=null,R=null,A=null,P=new je(0,0,0),L=0,M=!1,y=null,C=null,N=null,k=null,W=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=K>=2);let se=null,de={};const ve=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),Ze=new ut().fromArray(ve),tt=new ut().fromArray(ze);function qe(D,ie,oe,pe){const Q=new Uint8Array(4),Y=n.createTexture();n.bindTexture(D,Y),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<oe;_e++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ie+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return Y}const $={};$[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(bi),Le(!1),xe(zo),Z(n.CULL_FACE),st(Ln);function Z(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function ee(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function De(D,ie){return h[D]!==ie?(n.bindFramebuffer(D,ie),h[D]=ie,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ie),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function we(D,ie){let oe=m,pe=!1;if(D){oe=f.get(ie),oe===void 0&&(oe=[],f.set(ie,oe));const Q=D.textures;if(oe.length!==Q.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,_e=Q.length;Y<_e;Y++)oe[Y]=n.COLOR_ATTACHMENT0+Y;oe.length=Q.length,pe=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,pe=!0);pe&&n.drawBuffers(oe)}function We(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const St={[Kn]:n.FUNC_ADD,[Yc]:n.FUNC_SUBTRACT,[jc]:n.FUNC_REVERSE_SUBTRACT};St[Kc]=n.MIN,St[Zc]=n.MAX;const w={[Jc]:n.ZERO,[Qc]:n.ONE,[el]:n.SRC_COLOR,[xs]:n.SRC_ALPHA,[ol]:n.SRC_ALPHA_SATURATE,[rl]:n.DST_COLOR,[nl]:n.DST_ALPHA,[tl]:n.ONE_MINUS_SRC_COLOR,[ys]:n.ONE_MINUS_SRC_ALPHA,[sl]:n.ONE_MINUS_DST_COLOR,[il]:n.ONE_MINUS_DST_ALPHA,[al]:n.CONSTANT_COLOR,[cl]:n.ONE_MINUS_CONSTANT_COLOR,[ll]:n.CONSTANT_ALPHA,[ul]:n.ONE_MINUS_CONSTANT_ALPHA};function st(D,ie,oe,pe,Q,Y,_e,Ue,nt,Ke){if(D===Ln){x===!0&&(ee(n.BLEND),x=!1);return}if(x===!1&&(Z(n.BLEND),x=!0),D!==$c){if(D!==p||Ke!==M){if((u!==Kn||S!==Kn)&&(n.blendEquation(n.FUNC_ADD),u=Kn,S=Kn),Ke)switch(D){case yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ho:n.blendFunc(n.ONE,n.ONE);break;case Go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Go:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,R=null,A=null,P.set(0,0,0),L=0,p=D,M=Ke}return}Q=Q||ie,Y=Y||oe,_e=_e||pe,(ie!==u||Q!==S)&&(n.blendEquationSeparate(St[ie],St[Q]),u=ie,S=Q),(oe!==T||pe!==E||Y!==R||_e!==A)&&(n.blendFuncSeparate(w[oe],w[pe],w[Y],w[_e]),T=oe,E=pe,R=Y,A=_e),(Ue.equals(P)===!1||nt!==L)&&(n.blendColor(Ue.r,Ue.g,Ue.b,nt),P.copy(Ue),L=nt),p=D,M=!1}function Ne(D,ie){D.side===on?ee(n.CULL_FACE):Z(n.CULL_FACE);let oe=D.side===Nt;ie&&(oe=!oe),Le(oe),D.blending===yi&&D.transparent===!1?st(Ln):st(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;a.setTest(pe),pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function xe(D){D!==Xc?(Z(n.CULL_FACE),D!==C&&(D===zo?n.cullFace(n.BACK):D===qc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),C=D}function ot(D){D!==N&&(q&&n.lineWidth(D),N=D)}function ye(D,ie,oe){D?(Z(n.POLYGON_OFFSET_FILL),(k!==ie||W!==oe)&&(n.polygonOffset(ie,oe),k=ie,W=oe)):ee(n.POLYGON_OFFSET_FILL)}function Be(D){D?Z(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function vt(D){D===void 0&&(D=n.TEXTURE0+V-1),se!==D&&(n.activeTexture(D),se=D)}function ht(D,ie,oe){oe===void 0&&(se===null?oe=n.TEXTURE0+V-1:oe=se);let pe=de[oe];pe===void 0&&(pe={type:void 0,texture:void 0},de[oe]=pe),(pe.type!==D||pe.texture!==ie)&&(se!==oe&&(n.activeTexture(oe),se=oe),n.bindTexture(D,ie||$[D]),pe.type=D,pe.texture=ie)}function b(){const D=de[se];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(D){Ze.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Pe(D){tt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),tt.copy(D))}function Ee(D,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let pe=oe.get(D);pe===void 0&&(pe=n.getUniformBlockIndex(ie,D.name),oe.set(D,pe))}function le(D,ie){const pe=c.get(ie).get(D);l.get(ie)!==pe&&(n.uniformBlockBinding(ie,pe,D.__bindingPointIndex),l.set(ie,pe))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},se=null,de={},h={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,T=null,E=null,S=null,R=null,A=null,P=new je(0,0,0),L=0,M=!1,y=null,C=null,N=null,k=null,W=null,Ze.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:ee,bindFramebuffer:De,drawBuffers:we,useProgram:We,setBlending:st,setMaterial:Ne,setFlipSided:Le,setCullFace:xe,setLineWidth:ot,setPolygonOffset:ye,setScissorTest:Be,activeTexture:vt,bindTexture:ht,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:be,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:le,texStorage2D:re,texStorage3D:Se,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:G,compressedTexSubImage3D:Te,scissor:he,viewport:Pe,reset:Fe}}function Vp(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return m?new OffscreenCanvas(b,_):Ar("canvas")}function x(b,_,F){let X=1;const J=ht(b);if((J.width>F||J.height>F)&&(X=F/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(X*J.width),Te=Math.floor(X*J.height);h===void 0&&(h=g(G,Te));const re=_?g(G,Te):h;return re.width=G,re.height=Te,re.getContext("2d").drawImage(b,0,0,G,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+Te+")."),re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function p(b){return b.generateMipmaps}function u(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,_,F,X,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=_;if(_===n.RED&&(F===n.FLOAT&&(G=n.R32F),F===n.HALF_FLOAT&&(G=n.R16F),F===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.R8UI),F===n.UNSIGNED_SHORT&&(G=n.R16UI),F===n.UNSIGNED_INT&&(G=n.R32UI),F===n.BYTE&&(G=n.R8I),F===n.SHORT&&(G=n.R16I),F===n.INT&&(G=n.R32I)),_===n.RG&&(F===n.FLOAT&&(G=n.RG32F),F===n.HALF_FLOAT&&(G=n.RG16F),F===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RG8UI),F===n.UNSIGNED_SHORT&&(G=n.RG16UI),F===n.UNSIGNED_INT&&(G=n.RG32UI),F===n.BYTE&&(G=n.RG8I),F===n.SHORT&&(G=n.RG16I),F===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGB8UI),F===n.UNSIGNED_SHORT&&(G=n.RGB16UI),F===n.UNSIGNED_INT&&(G=n.RGB32UI),F===n.BYTE&&(G=n.RGB8I),F===n.SHORT&&(G=n.RGB16I),F===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),F===n.UNSIGNED_INT&&(G=n.RGBA32UI),F===n.BYTE&&(G=n.RGBA8I),F===n.SHORT&&(G=n.RGBA16I),F===n.INT&&(G=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),_===n.RGBA){const Te=J?Tr:Ye.getTransfer(X);F===n.FLOAT&&(G=n.RGBA32F),F===n.HALF_FLOAT&&(G=n.RGBA16F),F===n.UNSIGNED_BYTE&&(G=Te===Qe?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(b,_){let F;return b?_===null||_===ei||_===zi?F=n.DEPTH24_STENCIL8:_===xn?F=n.DEPTH32F_STENCIL8:_===ki&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ei||_===zi?F=n.DEPTH_COMPONENT24:_===xn?F=n.DEPTH_COMPONENT32F:_===ki&&(F=n.DEPTH_COMPONENT16),F}function R(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){const _=b.target;_.removeEventListener("dispose",A),L(_),_.isVideoTexture&&d.delete(_)}function P(b){const _=b.target;_.removeEventListener("dispose",P),y(_)}function L(b){const _=i.get(b);if(_.__webglInit===void 0)return;const F=b.source,X=f.get(F);if(X){const J=X[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(b),Object.keys(X).length===0&&f.delete(F)}i.remove(b)}function M(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const F=b.source,X=f.get(F);delete X[_.__cacheKey],o.memory.textures--}function y(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let J=0;J<_.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[X][J]);else n.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)n.deleteFramebuffer(_.__webglFramebuffer[X]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=b.textures;for(let X=0,J=F.length;X<J;X++){const G=i.get(F[X]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(F[X])}i.remove(b)}let C=0;function N(){C=0}function k(){const b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function W(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function V(b,_){const F=i.get(b);if(b.isVideoTexture&&Be(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function q(b,_){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){$(F,b,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function K(b,_){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){$(F,b,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function H(b,_){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Z(F,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const se={[Ps]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Ds]:n.MIRRORED_REPEAT},de={[tn]:n.NEAREST,[yl]:n.NEAREST_MIPMAP_NEAREST,[Ji]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[zr]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},ve={[El]:n.NEVER,[Pl]:n.ALWAYS,[Tl]:n.LESS,[cc]:n.LEQUAL,[wl]:n.EQUAL,[Cl]:n.GEQUAL,[Al]:n.GREATER,[Rl]:n.NOTEQUAL};function ze(b,_){if(_.type===xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===zr||_.magFilter===Ji||_.magFilter===Qn||_.minFilter===an||_.minFilter===zr||_.minFilter===Ji||_.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,se[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,se[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,se[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===tn||_.minFilter!==Ji&&_.minFilter!==Qn||_.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));const X=_.source;let J=f.get(X);J===void 0&&(J={},f.set(X,J));const G=W(_);if(G!==b.__cacheKey){J[G]===void 0&&(J[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[G].usedTimes++;const Te=J[b.__cacheKey];Te!==void 0&&(J[b.__cacheKey].usedTimes--,Te.usedTimes===0&&M(_)),b.__cacheKey=G,b.__webglTexture=J[G].texture}return F}function tt(b,_,F){return Math.floor(Math.floor(b/F)/_)}function qe(b,_,F,X){const G=b.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,X,_.data);else{G.sort((ne,he)=>ne.start-he.start);let Te=0;for(let ne=1;ne<G.length;ne++){const he=G[Te],Pe=G[ne],Ee=he.start+he.count,le=tt(Pe.start,_.width,4),Fe=tt(he.start,_.width,4);Pe.start<=Ee+1&&le===Fe&&tt(Pe.start+Pe.count-1,_.width,4)===le?he.count=Math.max(he.count,Pe.start+Pe.count-he.start):(++Te,G[Te]=Pe)}G.length=Te+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ne=0,he=G.length;ne<he;ne++){const Pe=G[ne],Ee=Math.floor(Pe.start/4),le=Math.ceil(Pe.count/4),Fe=Ee%_.width,D=Math.floor(Ee/_.width),ie=le,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Fe,D,ie,oe,F,X,_.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function $(b,_,F){let X=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=n.TEXTURE_3D);const J=Ze(b,_),G=_.source;t.bindTexture(X,b.__webglTexture,n.TEXTURE0+F);const Te=i.get(G);if(G.version!==Te.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const re=Ye.getPrimaries(Ye.workingColorSpace),Se=_.colorSpace===Pn?null:Ye.getPrimaries(_.colorSpace),be=_.colorSpace===Pn||re===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ne=x(_.image,!1,r.maxTextureSize);ne=vt(_,ne);const he=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let Ee=E(_.internalFormat,he,Pe,_.colorSpace,_.isVideoTexture);ze(X,_);let le;const Fe=_.mipmaps,D=_.isVideoTexture!==!0,ie=Te.__version===void 0||J===!0,oe=G.dataReady,pe=R(_,ne);if(_.isDepthTexture)Ee=S(_.format===Gi,_.type),ie&&(D?t.texStorage2D(n.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,he,Pe,null));else if(_.isDataTexture)if(Fe.length>0){D&&ie&&t.texStorage2D(n.TEXTURE_2D,pe,Ee,Fe[0].width,Fe[0].height);for(let Q=0,Y=Fe.length;Q<Y;Q++)le=Fe[Q],D?oe&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,le.width,le.height,he,Pe,le.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,le.width,le.height,0,he,Pe,le.data);_.generateMipmaps=!1}else D?(ie&&t.texStorage2D(n.TEXTURE_2D,pe,Ee,ne.width,ne.height),oe&&qe(_,ne,he,Pe)):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,he,Pe,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ee,Fe[0].width,Fe[0].height,ne.depth);for(let Q=0,Y=Fe.length;Q<Y;Q++)if(le=Fe[Q],_.format!==en)if(he!==null)if(D){if(oe)if(_.layerUpdates.size>0){const _e=ma(le.width,le.height,_.format,_.type);for(const Ue of _.layerUpdates){const nt=le.data.subarray(Ue*_e/le.data.BYTES_PER_ELEMENT,(Ue+1)*_e/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ue,le.width,le.height,1,he,nt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,ne.depth,he,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,le.width,le.height,ne.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,ne.depth,he,Pe,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,le.width,le.height,ne.depth,0,he,Pe,le.data)}else{D&&ie&&t.texStorage2D(n.TEXTURE_2D,pe,Ee,Fe[0].width,Fe[0].height);for(let Q=0,Y=Fe.length;Q<Y;Q++)le=Fe[Q],_.format!==en?he!==null?D?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,le.width,le.height,he,le.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ee,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?oe&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,le.width,le.height,he,Pe,le.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,le.width,le.height,0,he,Pe,le.data)}else if(_.isDataArrayTexture)if(D){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ee,ne.width,ne.height,ne.depth),oe)if(_.layerUpdates.size>0){const Q=ma(ne.width,ne.height,_.format,_.type);for(const Y of _.layerUpdates){const _e=ne.data.subarray(Y*Q/ne.data.BYTES_PER_ELEMENT,(Y+1)*Q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,ne.width,ne.height,1,he,Pe,_e)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,Pe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,he,Pe,ne.data);else if(_.isData3DTexture)D?(ie&&t.texStorage3D(n.TEXTURE_3D,pe,Ee,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,Pe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,he,Pe,ne.data);else if(_.isFramebufferTexture){if(ie)if(D)t.texStorage2D(n.TEXTURE_2D,pe,Ee,ne.width,ne.height);else{let Q=ne.width,Y=ne.height;for(let _e=0;_e<pe;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ee,Q,Y,0,he,Pe,null),Q>>=1,Y>>=1}}else if(Fe.length>0){if(D&&ie){const Q=ht(Fe[0]);t.texStorage2D(n.TEXTURE_2D,pe,Ee,Q.width,Q.height)}for(let Q=0,Y=Fe.length;Q<Y;Q++)le=Fe[Q],D?oe&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,he,Pe,le):t.texImage2D(n.TEXTURE_2D,Q,Ee,he,Pe,le);_.generateMipmaps=!1}else if(D){if(ie){const Q=ht(ne);t.texStorage2D(n.TEXTURE_2D,pe,Ee,Q.width,Q.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Pe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ee,he,Pe,ne);p(_)&&u(X),Te.__version=G.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Z(b,_,F){if(_.image.length!==6)return;const X=Ze(b,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const G=i.get(J);if(J.version!==G.__version||X===!0){t.activeTexture(n.TEXTURE0+F);const Te=Ye.getPrimaries(Ye.workingColorSpace),re=_.colorSpace===Pn?null:Ye.getPrimaries(_.colorSpace),Se=_.colorSpace===Pn||Te===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const be=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!be&&!ne?he[Y]=x(_.image[Y],!0,r.maxCubemapSize):he[Y]=ne?_.image[Y].image:_.image[Y],he[Y]=vt(_,he[Y]);const Pe=he[0],Ee=s.convert(_.format,_.colorSpace),le=s.convert(_.type),Fe=E(_.internalFormat,Ee,le,_.colorSpace),D=_.isVideoTexture!==!0,ie=G.__version===void 0||X===!0,oe=J.dataReady;let pe=R(_,Pe);ze(n.TEXTURE_CUBE_MAP,_);let Q;if(be){D&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Fe,Pe.width,Pe.height);for(let Y=0;Y<6;Y++){Q=he[Y].mipmaps;for(let _e=0;_e<Q.length;_e++){const Ue=Q[_e];_.format!==en?Ee!==null?D?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,Ue.width,Ue.height,Ee,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Fe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,Ue.width,Ue.height,Ee,le,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Fe,Ue.width,Ue.height,0,Ee,le,Ue.data)}}}else{if(Q=_.mipmaps,D&&ie){Q.length>0&&pe++;const Y=ht(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Fe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ne){D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,he[Y].width,he[Y].height,Ee,le,he[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,he[Y].width,he[Y].height,0,Ee,le,he[Y].data);for(let _e=0;_e<Q.length;_e++){const nt=Q[_e].image[Y].image;D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,nt.width,nt.height,Ee,le,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Fe,nt.width,nt.height,0,Ee,le,nt.data)}}else{D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee,le,he[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,Ee,le,he[Y]);for(let _e=0;_e<Q.length;_e++){const Ue=Q[_e];D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,Ee,le,Ue.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Fe,Ee,le,Ue.image[Y])}}}p(_)&&u(n.TEXTURE_CUBE_MAP),G.__version=J.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ee(b,_,F,X,J,G){const Te=s.convert(F.format,F.colorSpace),re=s.convert(F.type),Se=E(F.internalFormat,Te,re,F.colorSpace),be=i.get(_),ne=i.get(F);if(ne.__renderTarget=_,!be.__hasExternalTextures){const he=Math.max(1,_.width>>G),Pe=Math.max(1,_.height>>G);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,G,Se,he,Pe,_.depth,0,Te,re,null):t.texImage2D(J,G,Se,he,Pe,0,Te,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,ne.__webglTexture,0,ot(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,ne.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(b,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const X=_.depthTexture,J=X&&X.isDepthTexture?X.type:null,G=S(_.stencilBuffer,J),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=ot(_);ye(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,G,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,b)}else{const X=_.textures;for(let J=0;J<X.length;J++){const G=X[J],Te=s.convert(G.format,G.colorSpace),re=s.convert(G.type),Se=E(G.internalFormat,Te,re,G.colorSpace),be=ot(_);F&&ye(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Se,_.width,_.height):ye(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,Se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Se,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);const J=X.__webglTexture,G=ot(_);if(_.depthTexture.format===Hi)ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(_.depthTexture.format===Gi)ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function We(b){const _=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=X}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=b.texture.mipmaps;X&&X.length>0?we(_.__webglFramebuffer[0],b):we(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=n.createRenderbuffer(),De(_.__webglDepthbuffer[X],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,G)}}else{const X=b.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),De(_.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function St(b,_,F){const X=i.get(b);_!==void 0&&ee(X.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&We(b)}function w(b){const _=b.texture,F=i.get(b),X=i.get(_);b.addEventListener("dispose",P);const J=b.textures,G=b.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=_.version,o.memory.textures++),G){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let Se=0;Se<_.mipmaps.length;Se++)F.__webglFramebuffer[re][Se]=n.createFramebuffer()}else F.__webglFramebuffer[re]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)F.__webglFramebuffer[re]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Te)for(let re=0,Se=J.length;re<Se;re++){const be=i.get(J[re]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&ye(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const Se=J[re];F.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const be=s.convert(Se.format,Se.colorSpace),ne=s.convert(Se.type),he=E(Se.internalFormat,be,ne,Se.colorSpace,b.isXRRenderTarget===!0),Pe=ot(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,he,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,F.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),De(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ze(n.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)ee(F.__webglFramebuffer[re][Se],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else ee(F.__webglFramebuffer[re],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(_)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let re=0,Se=J.length;re<Se;re++){const be=J[re],ne=i.get(be);let he=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ne.__webglTexture),ze(he,be),ee(F.__webglFramebuffer,b,be,n.COLOR_ATTACHMENT0+re,he,0),p(be)&&u(he)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,X.__webglTexture),ze(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)ee(F.__webglFramebuffer[Se],b,_,n.COLOR_ATTACHMENT0,re,Se);else ee(F.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,re,0);p(_)&&u(re),t.unbindTexture()}b.depthBuffer&&We(b)}function st(b){const _=b.textures;for(let F=0,X=_.length;F<X;F++){const J=_[F];if(p(J)){const G=T(b),Te=i.get(J).__webglTexture;t.bindTexture(G,Te),u(G),t.unbindTexture()}}}const Ne=[],Le=[];function xe(b){if(b.samples>0){if(ye(b)===!1){const _=b.textures,F=b.width,X=b.height;let J=n.COLOR_BUFFER_BIT;const G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(b),re=_.length>1;if(re)for(let be=0;be<_.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=b.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<_.length;be++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const ne=i.get(_[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,J,n.NEAREST),l===!0&&(Ne.length=0,Le.length=0,Ne.push(n.COLOR_ATTACHMENT0+be),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ne.push(G),Le.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let be=0;be<_.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const ne=i.get(_[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ot(b){return Math.min(r.maxSamples,b.samples)}function ye(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(b){const _=o.render.frame;d.get(b)!==_&&(d.set(b,_),b.update())}function vt(b,_){const F=b.colorSpace,X=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==wi&&F!==Pn&&(Ye.getTransfer(F)===Qe?(X!==en||J!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ht(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=St,this.setupRenderTarget=w,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ye}function Wp(n,e){function t(i,r=Pn){let s;const o=Ye.getTransfer(r);if(i===un)return n.UNSIGNED_BYTE;if(i===fo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===po)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qa)return n.BYTE;if(i===ec)return n.SHORT;if(i===ki)return n.UNSIGNED_SHORT;if(i===ho)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Xi)return n.HALF_FLOAT;if(i===ic)return n.ALPHA;if(i===rc)return n.RGB;if(i===en)return n.RGBA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===Gi)return n.DEPTH_STENCIL;if(i===sc)return n.RED;if(i===mo)return n.RED_INTEGER;if(i===oc)return n.RG;if(i===go)return n.RG_INTEGER;if(i===_o)return n.RGBA_INTEGER;if(i===yr||i===Mr||i===Sr||i===br)if(o===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ls||i===Is||i===Us||i===Ns)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ls)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Is)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Us)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ns)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fs||i===Os||i===Bs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fs||i===Os)return o===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ks||i===zs||i===Hs||i===Gs||i===Vs||i===Ws||i===Xs||i===qs||i===$s||i===Ys||i===js||i===Ks||i===Zs||i===Js)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ks)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ws)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$s)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ys)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===js)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ks)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Js)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qs||i===eo||i===to)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qs)return o===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===to)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===no||i===io||i===ro||i===so)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===no)return s.COMPRESSED_RED_RGTC1_EXT;if(i===io)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===so)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $p{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nn({vertexShader:Xp,fragmentShader:qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yp extends Ri{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,g=null;const x=typeof XRWebGLBinding<"u",p=new $p,u={},T=t.getContextAttributes();let E=null,S=null;const R=[],A=[],P=new Xe;let L=null;const M=new Jt;M.viewport=new ut;const y=new Jt;y.viewport=new ut;const C=[M,y],N=new fu;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=R[$];return Z===void 0&&(Z=new ls,R[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=R[$];return Z===void 0&&(Z=new ls,R[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=R[$];return Z===void 0&&(Z=new ls,R[$]=Z),Z.getHandSpace()};function V($){const Z=A.indexOf($.inputSource);if(Z===-1)return;const ee=R[Z];ee!==void 0&&(ee.update($.inputSource,$.frame,c||o),ee.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let $=0;$<R.length;$++){const Z=A[$];Z!==null&&(A[$]=null,R[$].disconnect(Z))}k=null,W=null,p.reset();for(const $ in u)delete u[$];e.setRenderTarget(E),m=null,f=null,h=null,r=null,S=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),T.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,De=null,we=null;T.depth&&(we=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=T.stencil?Gi:Hi,De=T.stencil?zi:ei);const We={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ti(f.textureWidth,f.textureHeight,{format:en,type:un,depthTexture:new vc(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ee={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ti(m.framebufferWidth,m.framebufferHeight,{format:en,type:un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K($){for(let Z=0;Z<$.removed.length;Z++){const ee=$.removed[Z],De=A.indexOf(ee);De>=0&&(A[De]=null,R[De].disconnect(ee))}for(let Z=0;Z<$.added.length;Z++){const ee=$.added[Z];let De=A.indexOf(ee);if(De===-1){for(let We=0;We<R.length;We++)if(We>=A.length){A.push(ee),De=We;break}else if(A[We]===null){A[We]=ee,De=We;break}if(De===-1)break}const we=R[De];we&&we.connect(ee)}}const H=new O,se=new O;function de($,Z,ee){H.setFromMatrixPosition(Z.matrixWorld),se.setFromMatrixPosition(ee.matrixWorld);const De=H.distanceTo(se),we=Z.projectionMatrix.elements,We=ee.projectionMatrix.elements,St=we[14]/(we[10]-1),w=we[14]/(we[10]+1),st=(we[9]+1)/we[5],Ne=(we[9]-1)/we[5],Le=(we[8]-1)/we[0],xe=(We[8]+1)/We[0],ot=St*Le,ye=St*xe,Be=De/(-Le+xe),vt=Be*-Le;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(vt),$.translateZ(Be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),we[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ht=St+Be,b=w+Be,_=ot-vt,F=ye+(De-vt),X=st*w/b*ht,J=Ne*w/b*ht;$.projectionMatrix.makePerspective(_,F,X,J,ht,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ve($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Z=$.near,ee=$.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(ee=p.depthFar)),N.near=y.near=M.near=Z,N.far=y.far=M.far=ee,(k!==N.near||W!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,W=N.far),N.layers.mask=$.layers.mask|6,M.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const De=$.parent,we=N.cameras;ve(N,De);for(let We=0;We<we.length;We++)ve(we[We],De);we.length===2?de(N,M,y):N.projectionMatrix.copy(M.projectionMatrix),ze($,N,De)};function ze($,Z,ee){ee===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=oo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function($){return u[$]};let Ze=null;function tt($,Z){if(d=Z.getViewerPose(c||o),g=Z,d!==null){const ee=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let De=!1;ee.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let w=0;w<ee.length;w++){const st=ee[w];let Ne=null;if(m!==null)Ne=m.getViewport(st);else{const xe=h.getViewSubImage(f,st);Ne=xe.viewport,w===0&&(e.setRenderTargetTextures(S,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(S))}let Le=C[w];Le===void 0&&(Le=new Jt,Le.layers.enable(w),Le.viewport=new ut,C[w]=Le),Le.matrix.fromArray(st.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(st.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),w===0&&(N.matrix.copy(Le.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Le)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const w=h.getDepthInformation(ee[0]);w&&w.isValid&&w.texture&&p.init(w,r.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let w=0;w<ee.length;w++){const st=ee[w].camera;if(st){let Ne=u[st];Ne||(Ne=new xc,u[st]=Ne);const Le=h.getCameraImage(st);Ne.sourceTexture=Le}}}}for(let ee=0;ee<R.length;ee++){const De=A[ee],we=R[ee];De!==null&&we!==void 0&&we.update(De,Z,c||o)}Ze&&Ze($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const qe=new Mc;qe.setAnimationLoop(tt),this.setAnimationLoop=function($){Ze=$},this.dispose=function(){}}}const qn=new dn,jp=new dt;function Kp(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,mc(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,T,E,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,T,E):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Nt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Nt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u),E=T.envMap,S=T.envMapRotation;E&&(p.envMap.value=E,qn.copy(S),qn.x*=-1,qn.y*=-1,qn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),p.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(qn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,T,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=E*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Nt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zp(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const S=E.program;i.uniformBlockBinding(T,S)}function c(T,E){let S=r[T.id];S===void 0&&(g(T),S=d(T),r[T.id]=S,T.addEventListener("dispose",p));const R=E.program;i.updateUBOMapping(T,R);const A=e.render.frame;s[T.id]!==A&&(f(T),s[T.id]=A)}function d(T){const E=h();T.__bindingPointIndex=E;const S=n.createBuffer(),R=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=r[T.id],S=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,P=S.length;A<P;A++){const L=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=L.length;M<y;M++){const C=L[M];if(m(C,A,M,R)===!0){const N=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let V=0;V<k.length;V++){const q=k[V],K=x(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+W,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,E,S,R){const A=T.value,P=E+"_"+S;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{const L=R[P];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[P]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(T){const E=T.uniforms;let S=0;const R=16;for(let P=0,L=E.length;P<L;P++){const M=Array.isArray(E[P])?E[P]:[E[P]];for(let y=0,C=M.length;y<C;y++){const N=M[y],k=Array.isArray(N.value)?N.value:[N.value];for(let W=0,V=k.length;W<V;W++){const q=k[W],K=x(q),H=S%R,se=H%K.boundary,de=H+se;S+=se,de!==0&&R-de<K.storage&&(S+=R-de),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=K.storage}}}const A=S%R;return A>0&&(S+=R-A),T.__size=S,T.__cache={},this}function x(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function p(T){const E=T.target;E.removeEventListener("dispose",p);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Jp{constructor(e={}){const{canvas:t=Ll(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,u=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=$t;let A=0,P=0,L=null,M=-1,y=null;const C=new ut,N=new ut;let k=null;const W=new je(0);let V=0,q=t.width,K=t.height,H=1,se=null,de=null;const ve=new ut(0,0,q,K),ze=new ut(0,0,q,K);let Ze=!1;const tt=new Mo;let qe=!1,$=!1;const Z=new dt,ee=new O,De=new ut,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function St(){return L===null?H:1}let w=i;function st(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uo}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Q,!1),w===null){const I="webgl2";if(w=st(I,v),w===null)throw st(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ne,Le,xe,ot,ye,Be,vt,ht,b,_,F,X,J,G,Te,re,Se,be,ne,he,Pe,Ee,le,Fe;function D(){Ne=new cf(w),Ne.init(),Ee=new Wp(w,Ne),Le=new ef(w,Ne,e,Ee),xe=new Gp(w,Ne),Le.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),ot=new df(w),ye=new Cp,Be=new Vp(w,Ne,xe,ye,Le,Ee,ot),vt=new nf(S),ht=new af(S),b=new gu(w),le=new Jh(w,b),_=new lf(w,b,ot,le),F=new ff(w,_,b,ot),ne=new hf(w,Le,Be),re=new tf(ye),X=new Rp(S,vt,ht,Ne,Le,le,re),J=new Kp(S,ye),G=new Dp,Te=new Op(Ne),be=new Zh(S,vt,ht,xe,F,m,l),Se=new zp(S,F,Le),Fe=new Zp(w,ot,Le,xe),he=new Qh(w,Ne,ot),Pe=new uf(w,Ne,ot),ot.programs=X.programs,S.capabilities=Le,S.extensions=Ne,S.properties=ye,S.renderLists=G,S.shadowMap=Se,S.state=xe,S.info=ot}D();const ie=new Yp(S,w);this.xr=ie,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Ne.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ne.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(q,K,!1))},this.getSize=function(v){return v.set(q,K)},this.setSize=function(v,I,B=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,K=I,t.width=Math.floor(v*H),t.height=Math.floor(I*H),B===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(q*H,K*H).floor()},this.setDrawingBufferSize=function(v,I,B){q=v,K=I,H=B,t.width=Math.floor(v*B),t.height=Math.floor(I*B),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(ve)},this.setViewport=function(v,I,B,z){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,I,B,z),xe.viewport(C.copy(ve).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(ze)},this.setScissor=function(v,I,B,z){v.isVector4?ze.set(v.x,v.y,v.z,v.w):ze.set(v,I,B,z),xe.scissor(N.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(v){xe.setScissorTest(Ze=v)},this.setOpaqueSort=function(v){se=v},this.setTransparentSort=function(v){de=v},this.getClearColor=function(v){return v.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,B=!0){let z=0;if(v){let U=!1;if(L!==null){const te=L.texture.format;U=te===_o||te===go||te===mo}if(U){const te=L.texture.type,ue=te===un||te===ei||te===ki||te===zi||te===fo||te===po,ge=be.getClearColor(),fe=be.getClearAlpha(),Ce=ge.r,Ie=ge.g,Ae=ge.b;ue?(g[0]=Ce,g[1]=Ie,g[2]=Ae,g[3]=fe,w.clearBufferuiv(w.COLOR,0,g)):(x[0]=Ce,x[1]=Ie,x[2]=Ae,x[3]=fe,w.clearBufferiv(w.COLOR,0,x))}else z|=w.COLOR_BUFFER_BIT}I&&(z|=w.DEPTH_BUFFER_BIT),B&&(z|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),be.dispose(),G.dispose(),Te.dispose(),ye.dispose(),vt.dispose(),ht.dispose(),F.dispose(),le.dispose(),Fe.dispose(),X.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",rn),ie.removeEventListener("sessionend",Lo),kn.stop()};function oe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const v=ot.autoReset,I=Se.enabled,B=Se.autoUpdate,z=Se.needsUpdate,U=Se.type;D(),ot.autoReset=v,Se.enabled=I,Se.autoUpdate=B,Se.needsUpdate=z,Se.type=U}function Q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Y(v){const I=v.target;I.removeEventListener("dispose",Y),_e(I)}function _e(v){Ue(v),ye.remove(v)}function Ue(v){const I=ye.get(v).programs;I!==void 0&&(I.forEach(function(B){X.releaseProgram(B)}),v.isShaderMaterial&&X.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,B,z,U,te){I===null&&(I=we);const ue=U.isMesh&&U.matrixWorld.determinant()<0,ge=Bc(v,I,B,z,U);xe.setMaterial(z,ue);let fe=B.index,Ce=1;if(z.wireframe===!0){if(fe=_.getWireframeAttribute(B),fe===void 0)return;Ce=2}const Ie=B.drawRange,Ae=B.attributes.position;let Ge=Ie.start*Ce,Je=(Ie.start+Ie.count)*Ce;te!==null&&(Ge=Math.max(Ge,te.start*Ce),Je=Math.min(Je,(te.start+te.count)*Ce)),fe!==null?(Ge=Math.max(Ge,0),Je=Math.min(Je,fe.count)):Ae!=null&&(Ge=Math.max(Ge,0),Je=Math.min(Je,Ae.count));const lt=Je-Ge;if(lt<0||lt===1/0)return;le.setup(U,z,ge,B,fe);let it,et=he;if(fe!==null&&(it=b.get(fe),et=Pe,et.setIndex(it)),U.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*St()),et.setMode(w.LINES)):et.setMode(w.TRIANGLES);else if(U.isLine){let Re=z.linewidth;Re===void 0&&(Re=1),xe.setLineWidth(Re*St()),U.isLineSegments?et.setMode(w.LINES):U.isLineLoop?et.setMode(w.LINE_LOOP):et.setMode(w.LINE_STRIP)}else U.isPoints?et.setMode(w.POINTS):U.isSprite&&et.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Vi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Re=U._multiDrawStarts,at=U._multiDrawCounts,$e=U._multiDrawCount,Ot=fe?b.get(fe).bytesPerElement:1,ni=ye.get(z).currentProgram.getUniforms();for(let Bt=0;Bt<$e;Bt++)ni.setValue(w,"_gl_DrawID",Bt),et.render(Re[Bt]/Ot,at[Bt])}else if(U.isInstancedMesh)et.renderInstances(Ge,lt,U.count);else if(B.isInstancedBufferGeometry){const Re=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,at=Math.min(B.instanceCount,Re);et.renderInstances(Ge,lt,at)}else et.render(Ge,lt)};function nt(v,I,B){v.transparent===!0&&v.side===on&&v.forceSinglePass===!1?(v.side=Nt,v.needsUpdate=!0,Zi(v,I,B),v.side=Un,v.needsUpdate=!0,Zi(v,I,B),v.side=on):Zi(v,I,B)}this.compile=function(v,I,B=null){B===null&&(B=v),u=Te.get(B),u.init(I),E.push(u),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),v!==B&&v.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const z=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const ge=te[ue];nt(ge,B,U),z.add(ge)}else nt(te,B,U),z.add(te)}),u=E.pop(),z},this.compileAsync=function(v,I,B=null){const z=this.compile(v,I,B);return new Promise(U=>{function te(){if(z.forEach(function(ue){ye.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){U(v);return}setTimeout(te,10)}Ne.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ke=null;function hn(v){Ke&&Ke(v)}function rn(){kn.stop()}function Lo(){kn.start()}const kn=new Mc;kn.setAnimationLoop(hn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(v){Ke=v,ie.setAnimationLoop(v),v===null?kn.stop():kn.start()},ie.addEventListener("sessionstart",rn),ie.addEventListener("sessionend",Lo),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,I,L),u=Te.get(v,E.length),u.init(I),E.push(u),Z.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),tt.setFromProjectionMatrix(Z,cn,I.reversedDepth),$=this.localClippingEnabled,qe=re.init(this.clippingPlanes,$),p=G.get(v,T.length),p.init(),T.push(p),ie.enabled===!0&&ie.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&Br(te,I,-1/0,S.sortObjects)}Br(v,I,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(se,de),We=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,We&&be.addToRenderList(p,v),this.info.render.frame++,qe===!0&&re.beginShadows();const B=u.state.shadowsArray;Se.render(B,v,I),qe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,U=p.transmissive;if(u.setupLights(),I.isArrayCamera){const te=I.cameras;if(U.length>0)for(let ue=0,ge=te.length;ue<ge;ue++){const fe=te[ue];Uo(z,U,v,fe)}We&&be.render(v);for(let ue=0,ge=te.length;ue<ge;ue++){const fe=te[ue];Io(p,v,fe,fe.viewport)}}else U.length>0&&Uo(z,U,v,I),We&&be.render(v),Io(p,v,I);L!==null&&P===0&&(Be.updateMultisampleRenderTarget(L),Be.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(S,v,I),le.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(u=E[E.length-1],qe===!0&&re.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Br(v,I,B,z){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||tt.intersectsSprite(v)){z&&De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const ue=F.update(v),ge=v.material;ge.visible&&p.push(v,ue,ge,B,De.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||tt.intersectsObject(v))){const ue=F.update(v),ge=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),De.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),De.copy(ue.boundingSphere.center)),De.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(ge)){const fe=ue.groups;for(let Ce=0,Ie=fe.length;Ce<Ie;Ce++){const Ae=fe[Ce],Ge=ge[Ae.materialIndex];Ge&&Ge.visible&&p.push(v,ue,Ge,B,De.z,Ae)}}else ge.visible&&p.push(v,ue,ge,B,De.z,null)}}const te=v.children;for(let ue=0,ge=te.length;ue<ge;ue++)Br(te[ue],I,B,z)}function Io(v,I,B,z){const U=v.opaque,te=v.transmissive,ue=v.transparent;u.setupLightsView(B),qe===!0&&re.setGlobalState(S.clippingPlanes,B),z&&xe.viewport(C.copy(z)),U.length>0&&Ki(U,I,B),te.length>0&&Ki(te,I,B),ue.length>0&&Ki(ue,I,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Uo(v,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new ti(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Xi:un,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const te=u.state.transmissionRenderTarget[z.id],ue=z.viewport||C;te.setSize(ue.z*S.transmissionResolutionScale,ue.w*S.transmissionResolutionScale);const ge=S.getRenderTarget(),fe=S.getActiveCubeFace(),Ce=S.getActiveMipmapLevel();S.setRenderTarget(te),S.getClearColor(W),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),We&&be.render(B);const Ie=S.toneMapping;S.toneMapping=In;const Ae=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),qe===!0&&re.setGlobalState(S.clippingPlanes,z),Ki(v,B,z),Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Je=0,lt=I.length;Je<lt;Je++){const it=I[Je],et=it.object,Re=it.geometry,at=it.material,$e=it.group;if(at.side===on&&et.layers.test(z.layers)){const Ot=at.side;at.side=Nt,at.needsUpdate=!0,No(et,B,z,Re,at,$e),at.side=Ot,at.needsUpdate=!0,Ge=!0}}Ge===!0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te))}S.setRenderTarget(ge,fe,Ce),S.setClearColor(W,V),Ae!==void 0&&(z.viewport=Ae),S.toneMapping=Ie}function Ki(v,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,te=v.length;U<te;U++){const ue=v[U],ge=ue.object,fe=ue.geometry,Ce=ue.group;let Ie=ue.material;Ie.allowOverride===!0&&z!==null&&(Ie=z),ge.layers.test(B.layers)&&No(ge,I,B,fe,Ie,Ce)}}function No(v,I,B,z,U,te){v.onBeforeRender(S,I,B,z,U,te),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(S,I,B,z,v,te),U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=Nt,U.needsUpdate=!0,S.renderBufferDirect(B,I,z,U,v,te),U.side=Un,U.needsUpdate=!0,S.renderBufferDirect(B,I,z,U,v,te),U.side=on):S.renderBufferDirect(B,I,z,U,v,te),v.onAfterRender(S,I,B,z,U,te)}function Zi(v,I,B){I.isScene!==!0&&(I=we);const z=ye.get(v),U=u.state.lights,te=u.state.shadowsArray,ue=U.state.version,ge=X.getParameters(v,U.state,te,I,B),fe=X.getProgramCacheKey(ge);let Ce=z.programs;z.environment=v.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(v.isMeshStandardMaterial?ht:vt).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",Y),Ce=new Map,z.programs=Ce);let Ie=Ce.get(fe);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===ue)return Oo(v,ge),Ie}else ge.uniforms=X.getUniforms(v),v.onBeforeCompile(ge,S),Ie=X.acquireProgram(ge,fe),Ce.set(fe,Ie),z.uniforms=ge.uniforms;const Ae=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=re.uniform),Oo(v,ge),z.needsLights=zc(v),z.lightsStateVersion=ue,z.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function Fo(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Er.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Oo(v,I){const B=ye.get(v);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Bc(v,I,B,z,U){I.isScene!==!0&&(I=we),Be.resetTextureUnits();const te=I.fog,ue=z.isMeshStandardMaterial?I.environment:null,ge=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:wi,fe=(z.isMeshStandardMaterial?ht:vt).get(z.envMap||ue),Ce=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,Je=!!B.morphAttributes.color;let lt=In;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(lt=S.toneMapping);const it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=it!==void 0?it.length:0,Re=ye.get(z),at=u.state.lights;if(qe===!0&&($===!0||v!==y)){const Rt=v===y&&z.id===M;re.setState(z,v,Rt)}let $e=!1;z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==at.state.version||Re.outputColorSpace!==ge||U.isBatchedMesh&&Re.batching===!1||!U.isBatchedMesh&&Re.batching===!0||U.isBatchedMesh&&Re.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Re.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Re.instancing===!1||!U.isInstancedMesh&&Re.instancing===!0||U.isSkinnedMesh&&Re.skinning===!1||!U.isSkinnedMesh&&Re.skinning===!0||U.isInstancedMesh&&Re.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Re.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Re.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Re.instancingMorph===!1&&U.morphTexture!==null||Re.envMap!==fe||z.fog===!0&&Re.fog!==te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==re.numPlanes||Re.numIntersection!==re.numIntersection)||Re.vertexAlphas!==Ce||Re.vertexTangents!==Ie||Re.morphTargets!==Ae||Re.morphNormals!==Ge||Re.morphColors!==Je||Re.toneMapping!==lt||Re.morphTargetsCount!==et)&&($e=!0):($e=!0,Re.__version=z.version);let Ot=Re.currentProgram;$e===!0&&(Ot=Zi(z,I,U));let ni=!1,Bt=!1,Pi=!1;const ct=Ot.getUniforms(),Gt=Re.uniforms;if(xe.useProgram(Ot.program)&&(ni=!0,Bt=!0,Pi=!0),z.id!==M&&(M=z.id,Bt=!0),ni||y!==v){xe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ct.setValue(w,"projectionMatrix",v.projectionMatrix),ct.setValue(w,"viewMatrix",v.matrixWorldInverse);const It=ct.map.cameraPosition;It!==void 0&&It.setValue(w,ee.setFromMatrixPosition(v.matrixWorld)),Le.logarithmicDepthBuffer&&ct.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Bt=!0,Pi=!0)}if(U.isSkinnedMesh){ct.setOptional(w,U,"bindMatrix"),ct.setOptional(w,U,"bindMatrixInverse");const Rt=U.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(w,"boneTexture",Rt.boneTexture,Be))}U.isBatchedMesh&&(ct.setOptional(w,U,"batchingTexture"),ct.setValue(w,"batchingTexture",U._matricesTexture,Be),ct.setOptional(w,U,"batchingIdTexture"),ct.setValue(w,"batchingIdTexture",U._indirectTexture,Be),ct.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&ct.setValue(w,"batchingColorTexture",U._colorsTexture,Be));const Vt=B.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&ne.update(U,B,Ot),(Bt||Re.receiveShadow!==U.receiveShadow)&&(Re.receiveShadow=U.receiveShadow,ct.setValue(w,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Gt.envMap.value=fe,Gt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Gt.envMapIntensity.value=I.environmentIntensity),Bt&&(ct.setValue(w,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&kc(Gt,Pi),te&&z.fog===!0&&J.refreshFogUniforms(Gt,te),J.refreshMaterialUniforms(Gt,z,H,K,u.state.transmissionRenderTarget[v.id]),Er.upload(w,Fo(Re),Gt,Be)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Er.upload(w,Fo(Re),Gt,Be),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(w,"center",U.center),ct.setValue(w,"modelViewMatrix",U.modelViewMatrix),ct.setValue(w,"normalMatrix",U.normalMatrix),ct.setValue(w,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Rt=z.uniformsGroups;for(let It=0,kr=Rt.length;It<kr;It++){const zn=Rt[It];Fe.update(zn,Ot),Fe.bind(zn,Ot)}}return Ot}function kc(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function zc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,I,B){const z=ye.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ye.get(v.texture).__webglTexture=I,ye.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const B=ye.get(v);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0};const Hc=w.createFramebuffer();this.setRenderTarget=function(v,I=0,B=0){L=v,A=I,P=B;let z=!0,U=null,te=!1,ue=!1;if(v){const fe=ye.get(v);if(fe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(w.FRAMEBUFFER,null),z=!1;else if(fe.__webglFramebuffer===void 0)Be.setupRenderTarget(v);else if(fe.__hasExternalTextures)Be.rebindTextures(v,ye.get(v.texture).__webglTexture,ye.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ae=v.depthTexture;if(fe.__boundDepthTexture!==Ae){if(Ae!==null&&ye.has(Ae)&&(v.width!==Ae.image.width||v.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(v)}}const Ce=v.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ue=!0);const Ie=ye.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?U=Ie[I][B]:U=Ie[I],te=!0):v.samples>0&&Be.useMultisampledRTT(v)===!1?U=ye.get(v).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[B]:U=Ie,C.copy(v.viewport),N.copy(v.scissor),k=v.scissorTest}else C.copy(ve).multiplyScalar(H).floor(),N.copy(ze).multiplyScalar(H).floor(),k=Ze;if(B!==0&&(U=Hc),xe.bindFramebuffer(w.FRAMEBUFFER,U)&&z&&xe.drawBuffers(v,U),xe.viewport(C),xe.scissor(N),xe.setScissorTest(k),te){const fe=ye.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,B)}else if(ue){const fe=I;for(let Ce=0;Ce<v.textures.length;Ce++){const Ie=ye.get(v.textures[Ce]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ce,Ie.__webglTexture,B,fe)}}else if(v!==null&&B!==0){const fe=ye.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,fe.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(v,I,B,z,U,te,ue,ge=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe){xe.bindFramebuffer(w.FRAMEBUFFER,fe);try{const Ce=v.textures[ge],Ie=Ce.format,Ae=Ce.type;if(!Le.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-z&&B>=0&&B<=v.height-U&&(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),w.readPixels(I,B,z,U,Ee.convert(Ie),Ee.convert(Ae),te))}finally{const Ce=L!==null?ye.get(L).__webglFramebuffer:null;xe.bindFramebuffer(w.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,I,B,z,U,te,ue,ge=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe)if(I>=0&&I<=v.width-z&&B>=0&&B<=v.height-U){xe.bindFramebuffer(w.FRAMEBUFFER,fe);const Ce=v.textures[ge],Ie=Ce.format,Ae=Ce.type;if(!Le.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ge),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),w.readPixels(I,B,z,U,Ee.convert(Ie),Ee.convert(Ae),0);const Je=L!==null?ye.get(L).__webglFramebuffer:null;xe.bindFramebuffer(w.FRAMEBUFFER,Je);const lt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Il(w,lt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ge),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(Ge),w.deleteSync(lt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,B=0){const z=Math.pow(2,-B),U=Math.floor(v.image.width*z),te=Math.floor(v.image.height*z),ue=I!==null?I.x:0,ge=I!==null?I.y:0;Be.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,ue,ge,U,te),xe.unbindTexture()};const Gc=w.createFramebuffer(),Vc=w.createFramebuffer();this.copyTextureToTexture=function(v,I,B=null,z=null,U=0,te=null){te===null&&(U!==0?(Vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=U,U=0):te=0);let ue,ge,fe,Ce,Ie,Ae,Ge,Je,lt;const it=v.isCompressedTexture?v.mipmaps[te]:v.image;if(B!==null)ue=B.max.x-B.min.x,ge=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,Ce=B.min.x,Ie=B.min.y,Ae=B.isBox3?B.min.z:0;else{const Vt=Math.pow(2,-U);ue=Math.floor(it.width*Vt),ge=Math.floor(it.height*Vt),v.isDataArrayTexture?fe=it.depth:v.isData3DTexture?fe=Math.floor(it.depth*Vt):fe=1,Ce=0,Ie=0,Ae=0}z!==null?(Ge=z.x,Je=z.y,lt=z.z):(Ge=0,Je=0,lt=0);const et=Ee.convert(I.format),Re=Ee.convert(I.type);let at;I.isData3DTexture?(Be.setTexture3D(I,0),at=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Be.setTexture2DArray(I,0),at=w.TEXTURE_2D_ARRAY):(Be.setTexture2D(I,0),at=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const $e=w.getParameter(w.UNPACK_ROW_LENGTH),Ot=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ni=w.getParameter(w.UNPACK_SKIP_PIXELS),Bt=w.getParameter(w.UNPACK_SKIP_ROWS),Pi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,it.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,it.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ce),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ie),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ae);const ct=v.isDataArrayTexture||v.isData3DTexture,Gt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Vt=ye.get(v),Rt=ye.get(I),It=ye.get(Vt.__renderTarget),kr=ye.get(Rt.__renderTarget);xe.bindFramebuffer(w.READ_FRAMEBUFFER,It.__webglFramebuffer),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let zn=0;zn<fe;zn++)ct&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ye.get(v).__webglTexture,U,Ae+zn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ye.get(I).__webglTexture,te,lt+zn)),w.blitFramebuffer(Ce,Ie,ue,ge,Ge,Je,ue,ge,w.DEPTH_BUFFER_BIT,w.NEAREST);xe.bindFramebuffer(w.READ_FRAMEBUFFER,null),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||ye.has(v)){const Vt=ye.get(v),Rt=ye.get(I);xe.bindFramebuffer(w.READ_FRAMEBUFFER,Gc),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,Vc);for(let It=0;It<fe;It++)ct?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Vt.__webglTexture,U,Ae+It):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Vt.__webglTexture,U),Gt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Rt.__webglTexture,te,lt+It):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Rt.__webglTexture,te),U!==0?w.blitFramebuffer(Ce,Ie,ue,ge,Ge,Je,ue,ge,w.COLOR_BUFFER_BIT,w.NEAREST):Gt?w.copyTexSubImage3D(at,te,Ge,Je,lt+It,Ce,Ie,ue,ge):w.copyTexSubImage2D(at,te,Ge,Je,Ce,Ie,ue,ge);xe.bindFramebuffer(w.READ_FRAMEBUFFER,null),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Gt?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(at,te,Ge,Je,lt,ue,ge,fe,et,Re,it.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(at,te,Ge,Je,lt,ue,ge,fe,et,it.data):w.texSubImage3D(at,te,Ge,Je,lt,ue,ge,fe,et,Re,it):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,te,Ge,Je,ue,ge,et,Re,it.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,te,Ge,Je,it.width,it.height,et,it.data):w.texSubImage2D(w.TEXTURE_2D,te,Ge,Je,ue,ge,et,Re,it);w.pixelStorei(w.UNPACK_ROW_LENGTH,$e),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ot),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ni),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Pi),te===0&&I.generateMipmaps&&w.generateMipmap(at),xe.unbindTexture()},this.initRenderTarget=function(v){ye.get(v).__webglFramebuffer===void 0&&Be.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Be.setTextureCube(v,0):v.isData3DTexture?Be.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Be.setTexture2DArray(v,0):Be.setTexture2D(v,0),xe.unbindTexture()},this.resetState=function(){A=0,P=0,L=null,xe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Qp=3753261,em=2379626;class tm{constructor(e,t,i){this.container=e,this.onTileClick=t,this.onTileHover=i,this.raycaster=new pu,this.pointer=new Xe,this.tileMeshes=[],this.hoverMesh=null,this.pan=new O(0,0,0),this.zoom=1,this.dragging=!1,this.lastPointer={x:0,y:0},this.pulses=[],this.renderer=new Jp({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ka,this.container.appendChild(this.renderer.domElement),this.scene=new ru,this.scene.background=new je(1053979),this.camera=new To(-10,10,7,-7,.1,100),this.camera.position.set(14,16,18),this.camera.lookAt(8,0,8),this.boardGroup=new _i,this.scene.add(this.boardGroup),this.setupLights(),this.setupHandlers(),this.resize(),this.animate()}setupLights(){const e=new ha(16773330,2.2);e.position.set(-12,20,8),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,this.scene.add(e),this.scene.add(new hu(10466247,1));const t=new ha(7321087,.75);t.position.set(12,10,-8),this.scene.add(t)}setupHandlers(){window.addEventListener("resize",()=>this.resize()),this.renderer.domElement.addEventListener("contextmenu",e=>e.preventDefault()),this.renderer.domElement.addEventListener("pointerdown",e=>{if(e.button===0){const t=this.pickTile(e);t&&this.onTileClick(t.x,t.y)}else this.dragging=!0,this.lastPointer={x:e.clientX,y:e.clientY}}),window.addEventListener("pointerup",()=>{this.dragging=!1}),window.addEventListener("pointermove",e=>{if(this.dragging){const i=e.clientX-this.lastPointer.x,r=e.clientY-this.lastPointer.y;this.lastPointer={x:e.clientX,y:e.clientY},this.pan.x-=i*.012*this.zoom,this.pan.z-=r*.012*this.zoom,this.updateCamera();return}const t=this.pickTile(e);this.setHover(t),t&&this.onTileHover(t.x,t.y)}),this.renderer.domElement.addEventListener("wheel",e=>{e.preventDefault(),this.zoom=Math.min(1.8,Math.max(.62,this.zoom+Math.sign(e.deltaY)*.08)),this.updateCamera()},{passive:!1})}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t);const i=e/Math.max(1,t),r=12*this.zoom;this.camera.left=-r*i,this.camera.right=r*i,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix(),this.updateCamera()}updateCamera(){this.camera.position.set(14+this.pan.x,16,18+this.pan.z),this.camera.lookAt(8+this.pan.x,0,8+this.pan.z),this.resizeProjectionOnly()}resetView(){this.pan.set(0,0,0),this.zoom=1,this.updateCamera()}pulseTile(e,t){const i=new He(new bo(.34,.62,28),new Rr({color:16765802,transparent:!0,opacity:.52,side:on}));i.rotation.x=-Math.PI/2,i.position.set(e,.28,t),i.userData={born:performance.now(),duration:620},this.scene.add(i),this.pulses.push(i)}resizeProjectionOnly(){const e=this.container.clientWidth,t=this.container.clientHeight,i=e/Math.max(1,t),r=12*this.zoom;this.camera.left=-r*i,this.camera.right=r*i,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix()}renderState(e){this.clearBoard(),this.tileMeshes=[];const t=new He(new pt(Xt+.8,.08,Xt+.8),new rt({color:2238495,roughness:.92}));t.position.set(Xt/2-.5,-.12,Xt/2-.5),t.receiveShadow=!0,this.boardGroup.add(t);for(let i=0;i<Xt;i+=1)for(let r=0;r<Xt;r+=1){const s=e.grid[i][r],o=this.createTile(s,r,i);if(this.boardGroup.add(o),this.tileMeshes.push(o),s.buildingId){const a=this.createBuilding(s.buildingId,r,i);this.boardGroup.add(a)}}this.addRailAndRoadAccents(e)}clearBoard(){var e;for(;this.boardGroup.children.length;){const t=this.boardGroup.children.pop();(e=t.traverse)==null||e.call(t,i=>{var r,s,o,a;(s=(r=i.geometry)==null?void 0:r.dispose)==null||s.call(r),Array.isArray(i.material)?i.material.forEach(l=>{var c;return(c=l.dispose)==null?void 0:c.call(l)}):(a=(o=i.material)==null?void 0:o.dispose)==null||a.call(o)})}}createTile(e,t,i){const r=new rt({color:e.terrain==="water"?em:Qp,roughness:.85,metalness:.02}),s=new He(new pt(.96,.08,.96),r);return s.position.set(t,0,i),s.receiveShadow=!0,s.userData={x:t,y:i,isTile:!0},s}createBuilding(e,t,i){const r=wt[e],s=new _i;if(s.position.set(t,.08,i),e==="road"){const a=new He(new pt(.92,.04,.92),new rt({color:5196354,roughness:.9}));return a.position.y=.03,s.add(a),s}if(e==="rail"){const a=new He(new pt(.92,.05,.42),new rt({color:3420459,roughness:.8}));a.position.y=.04,s.add(a);for(const l of[-.14,.14]){const c=new He(new pt(.92,.04,.035),new rt({color:11774624,metalness:.45,roughness:.4}));c.position.set(0,.08,l),s.add(c)}return s}if(e==="farm"||e==="park"){const a=new He(new pt(.86,r.height,.86),new rt({color:r.color,roughness:.95}));if(a.position.y=r.height/2,a.castShadow=!0,s.add(a),e==="farm")for(let l=-2;l<=2;l+=1){const c=new He(new pt(.05,.05,.78),new rt({color:13152619,roughness:1}));c.position.set(l*.15,r.height+.02,0),s.add(c)}return s}const o=new He(new pt(.62,r.height,.62),new rt({color:r.color,roughness:.72,metalness:.04}));if(o.position.y=r.height/2,o.castShadow=!0,o.receiveShadow=!0,s.add(o),this.addWindows(s,r.height,e),["coalPlant","factory","dcPlant","acPlant","machineShop"].includes(e)){const a=e==="acPlant"?7656959:e==="dcPlant"?15778650:2959911,l=new He(new Zt(.09,.12,r.height*1.15,10),new rt({color:a,roughness:.55,metalness:.08}));if(l.position.set(.29,r.height*.68,-.22),l.castShadow=!0,s.add(l),e==="coalPlant"||e==="factory")for(let c=0;c<3;c+=1){const d=new He(new Cr(.08+c*.025,8,8),new rt({color:7302245,transparent:!0,opacity:.42,roughness:1}));d.position.set(.32+c*.05,r.height+.32+c*.16,-.22-c*.03),s.add(d)}}if(["townHall","school","library","clinic","bank","courthouse","insuranceOffice","settlementHouse"].includes(e)){const a=new He(new So(.46,.28,4),new rt({color:6111021,roughness:.75}));a.rotation.y=Math.PI/4,a.position.y=r.height+.13,a.castShadow=!0,s.add(a)}if(e==="courthouse"||e==="bank"||e==="insuranceOffice")for(const a of[-.22,0,.22]){const l=new He(new Zt(.035,.035,r.height*.68,8),new rt({color:15853518,roughness:.55}));l.position.set(a,r.height*.35,-.34),s.add(l)}if(e==="hydroPlant"||e==="waterPump"){const a=new He(new Eo(.23,.035,8,16),new rt({color:10082287,metalness:.2,roughness:.35}));a.position.set(.34,.36,0),a.rotation.y=Math.PI/2,s.add(a)}if(e==="gasolineDepot"||e==="dieselDepot"){const a=new He(new Zt(.19,.19,.44,16),new rt({color:e==="gasolineDepot"?14576184:4812613,metalness:.18,roughness:.45}));a.rotation.z=Math.PI/2,a.position.set(.04,.28,.34),s.add(a)}if(e==="grainElevator")for(const a of[-.16,.16]){const l=new He(new Zt(.13,.13,r.height*1.05,12),new rt({color:14205578,roughness:.7}));l.position.set(a,r.height*.52,.18),l.castShadow=!0,s.add(l)}if(e==="sewerWorks"){const a=new He(new Zt(.26,.26,.28,18),new rt({color:7308680,metalness:.08,roughness:.48}));a.position.set(.2,.22,.22),a.rotation.x=Math.PI/2,s.add(a);const l=new He(new Zt(.04,.04,.74,10),new rt({color:5003611,roughness:.5}));l.position.set(-.1,.16,-.22),l.rotation.z=Math.PI/2,s.add(l)}if(e==="batteryHouse")for(let a=0;a<3;a+=1){const l=new He(new pt(.16,.3,.18),new rt({color:9555168,emissive:1194058,emissiveIntensity:.28,roughness:.35}));l.position.set(-.18+a*.18,.28,.2),s.add(l)}if(e==="saloon"||e==="speakeasy"||e==="newspaper"){const a=new He(new pt(.42,.12,.04),new rt({color:e==="speakeasy"?14002175:15847818,roughness:.5}));a.position.set(0,r.height*.65,-.33),s.add(a)}if(e==="substation"||e==="powerLine"||e==="streetcar"||e==="telegraphOffice"||e==="radioStation"){const a=new He(new Zt(.035,.045,.7,8),new rt({color:14280168,roughness:.45}));a.position.set(-.28,.38,-.28),s.add(a);const l=new He(new pt(.5,.035,.035),new rt({color:9687026,emissive:1194578,emissiveIntensity:.35}));if(l.position.set(-.08,.68,-.28),s.add(l),e==="radioStation"){const c=new He(new Zt(.025,.035,1.15,8),new rt({color:13359583,metalness:.22,roughness:.35}));c.position.set(.28,.78,.26),s.add(c);const d=new He(new Cr(.055,10,10),new rt({color:16766315,emissive:9198098,emissiveIntensity:.6}));d.position.set(.28,1.38,.26),s.add(d)}}return s}addWindows(e,t,i){if(t<.55||["coalPlant","substation","powerLine","batteryHouse","sewerWorks"].includes(i))return;const r=i==="speakeasy"?13082111:i==="acPlant"?10216191:15913610;for(const s of[-.16,.16]){const o=new He(new pt(.09,.12,.025),new rt({color:r,emissive:r,emissiveIntensity:.12,roughness:.5}));o.position.set(s,Math.min(t*.68,t-.18),-.323),e.add(o)}}addRailAndRoadAccents(e){for(let t=0;t<Xt;t+=1)for(let i=0;i<Xt;i+=1){const r=e.grid[t][i];r.buildingId==="road"?this.addPathConnections(e,i,t,"road"):r.buildingId==="rail"&&this.addPathConnections(e,i,t,"rail")}}addPathConnections(e,t,i,r){var d,h;const s=r==="road",o=s?12562054:11774624,a=new rt({color:o,metalness:s?0:.35,roughness:s?.9:.45}),l=new He(new pt(s?.12:.18,.035,s?.12:.05),a);l.position.set(t,.16,i),this.boardGroup.add(l);const c=[[1,0],[-1,0],[0,1],[0,-1]];for(const[f,m]of c){const g=(h=(d=e.grid[i+m])==null?void 0:d[t+f])==null?void 0:h.buildingId;if(!(s?["road","mainStreet","railStation"].includes(g):g==="rail"||g==="railStation"))continue;const p=f!==0,u=new He(new pt(p?.48:s?.1:.16,.03,p?s?.1:.05:.48),a);u.position.set(t+f*.24,.17,i+m*.24),this.boardGroup.add(u)}}pickTile(e){var r;const t=this.renderer.domElement.getBoundingClientRect();return this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),((r=this.raycaster.intersectObjects(this.tileMeshes,!1)[0])==null?void 0:r.object.userData)??null}setHover(e){if(this.hoverMesh||(this.hoverMesh=new He(new pt(1.02,.035,1.02),new Rr({color:16767339,transparent:!0,opacity:.32})),this.scene.add(this.hoverMesh)),!e){this.hoverMesh.visible=!1;return}this.hoverMesh.visible=!0,this.hoverMesh.position.set(e.x,.22,e.y)}animate(){requestAnimationFrame(()=>this.animate());const e=performance.now();this.pulses=this.pulses.filter(t=>{const i=e-t.userData.born,r=Math.min(1,i/t.userData.duration);return t.scale.setScalar(1+r*.9),t.material.opacity=.52*(1-r),r>=1?(t.geometry.dispose(),t.material.dispose(),this.scene.remove(t),!1):!0}),this.renderer.render(this.scene,this.camera)}}const wc="engines-of-independence.save.v1",nm=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Oi(n="balanced"){const e=rm(),t=Mn[n]??Mn.balanced,i={version:2,seed:1880,charterId:t.id,monthIndex:0,turn:0,money:3200,debt:0,population:155,trust:58,health:62,corruption:12,shadowEconomy:8,resilience:42,innovation:12,monetaryTrust:64,liquidity:52,credit:32,inflation:12,bankStability:58,tradeConfidence:58,policies:{...$a},doctrines:{...Ya},completedProjects:[],completedMilestones:[],transientEffects:{},selectedBuildingId:"road",grid:e,eventHistory:[{headline:"Foundry Creek Files Incorporation Papers",summary:"A town charter, a muddy road, and several overconfident committees agree to become machinery."}],lastIssue:{headline:"Foundry Creek Files Incorporation Papers",summary:"A town charter, a muddy road, and several overconfident committees agree to become machinery."},gameOver:!1,collapseReason:""};return im(i,t),Cn(i,8,8,"townHall"),Cn(i,8,9,"road"),Cn(i,8,10,"road"),Cn(i,9,9,"mainStreet"),Cn(i,7,9,"residential"),Cn(i,7,10,"residential"),Cn(i,10,9,"farm"),Cn(i,11,9,"farm"),i}function im(n,e){const t=e.setup??{};for(const[i,r]of Object.entries(t))i==="policies"?n.policies={...n.policies,...r}:i==="doctrines"?n.doctrines={...n.doctrines,...r}:i in n&&(n[i]=r);n.lastIssue={headline:`${e.name} Filed at Town Hall`,summary:e.description},n.eventHistory=[n.lastIssue]}function rm(){const n=[];for(let e=0;e<Xt;e+=1){const t=[];for(let i=0;i<Xt;i+=1){const r=3+Math.round(Math.sin(e*.65)),s=i===r||e>11&&i===r+1;t.push({terrain:s?"water":"land",buildingId:null})}n.push(t)}return n}function Cn(n,e,t,i){n.grid[t][e]={terrain:"land",buildingId:i}}function Ac(n){const e=qa+Math.floor(n.monthIndex/12);return`${nm[n.monthIndex%12]} ${e}`}function On(n){return qa+Math.floor(n.monthIndex/12)}function Ao(n,e,t){if(!(e<0||t<0||e>=Xt||t>=Xt))return n.grid[t][e]}function Rc(n,e,t,i){const r=Ao(n,e,t),s=wt[i];if(!r||!s)return{ok:!1,reason:"No such plot or building."};if(r.buildingId)return{ok:!1,reason:"That plot already has machinery on it."};if(r.terrain==="water"&&!s.requiresWater)return{ok:!1,reason:"Only water works or hydro can use the river."};if(r.terrain==="land"&&s.requiresWater&&!om(n,e,t))return{ok:!1,reason:`${s.name} must touch the river.`};if(s.unlock&&!s.unlock(n))return{ok:!1,reason:Pr(n,i)};const o=Pr(n,i);if(o)return{ok:!1,reason:o};const a=Nr(n,i);return n.money<a?{ok:!1,reason:`Needs $${a}, but the treasury is short.`}:{ok:!0,reason:""}}function sm(n,e,t,i){const r=Rc(n,e,t,i);if(!r.ok)return{state:n,ok:!1,message:r.reason};const s=Sn(n);s.grid[t][e]={...s.grid[t][e],terrain:s.grid[t][e].terrain,buildingId:i},s.money-=Nr(n,i),s.lastIssue={headline:`${wt[i].name} Added to the Town Machine`,summary:`${wt[i].description} The ledger records the cost before voters can improve the sentence.`},s.eventHistory=Fn(s.eventHistory,s.lastIssue);const o=Fr(s);return{state:o.state,ok:!0,message:o.awarded.length?`${wt[i].name} built. Milestone: ${o.awarded.at(-1).name}.`:`${wt[i].name} built.`}}function Nr(n,e){let i=wt[e].cost;return n.policies.utility==="private"&&["acPlant","dcPlant","powerLine","substation"].includes(e)&&(i*=.86),n.policies.publicWorks==="aggressive"&&["road","publicWorks","waterPump"].includes(e)&&(i*=.9),n.policies.regulation==="strict"&&["factory","coalPlant","gasolineDepot","dieselDepot"].includes(e)&&(i*=1.12),Math.round(i)}function om(n,e,t){return[[1,0],[-1,0],[0,1],[0,-1],[0,0]].some(([r,s])=>{var o;return((o=Ao(n,e+r,t+s))==null?void 0:o.terrain)==="water"})}function Sn(n){return{...n,policies:{...n.policies},doctrines:{...n.doctrines},completedProjects:[...n.completedProjects??[]],completedMilestones:[...n.completedMilestones??[]],transientEffects:{...n.transientEffects??{}},grid:n.grid.map(e=>e.map(t=>({...t}))),eventHistory:n.eventHistory.map(e=>({...e})),lastIssue:{...n.lastIssue}}}function Pr(n,e){const t=wt[e];return t?t.unlock&&!t.unlock(n)?`${t.name} is not unlocked yet.`:t.minYear&&On(n)<t.minYear?`${t.name} unlocks in ${t.minYear}.`:t.minInnovation&&n.innovation<t.minInnovation?`${t.name} needs ${t.minInnovation} innovation.`:"":"No such building."}function Ro(n,e){const t=Si[e];return t?(n.completedProjects??[]).includes(e)?{ok:!1,reason:"Already completed."}:t.minYear&&On(n)<t.minYear?{ok:!1,reason:`Unlocks in ${t.minYear}.`}:t.minInnovation&&n.innovation<t.minInnovation?{ok:!1,reason:`Needs ${t.minInnovation} innovation.`}:n.money<t.cost?{ok:!1,reason:`Needs ${Lt(t.cost)}.`}:{ok:!0,reason:""}:{ok:!1,reason:"No such civic project."}}function am(n,e){const t=Ro(n,e);if(!t.ok)return{state:n,ok:!1,message:t.reason};const i=Si[e],r=Sn(n);r.completedProjects=[...r.completedProjects??[],e],r.money-=i.cost,r.debt+=i.debt??0,r.lastIssue={headline:i.headline,summary:i.summary},r.eventHistory=Fn(r.eventHistory,r.lastIssue);const s=Fr(r);return{state:s.state,ok:!0,message:s.awarded.length?`${i.name} completed. Milestone: ${s.awarded.at(-1).name}.`:`${i.name} completed.`}}function Fr(n){let e=Sn(n);const t=[],i=new Set(e.completedMilestones??[]),r=Bn(e),s=r.counts??Co(e),o=On(e);for(const a of xi)i.has(a.id)||a.condition({state:e,stats:r,counts:s,year:o})&&(i.add(a.id),e.completedMilestones=[...i],cm(e,a.reward??{}),e.lastIssue={headline:a.headline,summary:a.summary},e.eventHistory=Fn(e.eventHistory,e.lastIssue),t.push(a));return{state:e,awarded:t}}function cm(n,e){for(const[t,i]of Object.entries(e))t==="money"||t==="debt"||t==="population"?n[t]+=i:t==="shadow"?n.shadowEconomy=Me(n.shadowEconomy+i,0,100):t in n&&typeof n[t]=="number"?n[t]=Me(n[t]+i,0,100):n.transientEffects[t]=(n.transientEffects[t]??0)+i}function lm(n,e,t){const i=Sn(n);return i.policies[e]=t,i.lastIssue={headline:"Council Adjusts the Levers",summary:`The ${Wi(e)} engine now runs on ${Wi(t)}. Somewhere, a committee feels productive.`},i.eventHistory=Fn(i.eventHistory,i.lastIssue),i}function um(n,e,t){const i=Sn(n);return i.doctrines[e]=t,i.lastIssue={headline:"Engine Doctrine Rewritten",summary:`${Wi(e)} now follows ${Wi(t)}. The town has converted preference into infrastructure risk.`},i.eventHistory=Fn(i.eventHistory,i.lastIssue),i}function dm(n){const e=Sn(n),t=["greenbacks","municipalBonds"].includes(e.doctrines.money);return e.money+=t?1500:1200,e.debt+=t?1650:1400,e.trust=Me(e.trust-2,0,100),e.liquidity=Me(e.liquidity+(t?8:3),0,100),e.monetaryTrust=Me(e.monetaryTrust-(e.doctrines.money==="hardMoney"?5:2),0,100),e.inflation=Me(e.inflation+(e.doctrines.money==="greenbacks"?5:1),0,100),e.lastIssue={headline:"Council Borrows From the Future, Future Unavailable for Comment",summary:"A bond sale funds immediate construction and adds interest to the town machinery."},e.eventHistory=Fn(e.eventHistory,e.lastIssue),Fr(e).state}function Bn(n){const e=Co(n),t=Object.values(e).reduce((ee,De)=>ee+De,0),i=hm(n),r=n.transientEffects??{},s=fm(n),o=pm(n);let a=120+i.housing,l=40+i.jobs,c=65+i.food,d=24+i.powerSupply,h=Math.max(12,i.powerDemand+Math.ceil(n.population/70)),f=20+i.freight,m=Math.max(12,i.freightDemand+e.factory*8+Math.ceil(n.population/95)),g=i.revenue+n.population*.18+l*.08,x=i.maintenance+Math.ceil(n.population/180),p=i.pollution,u=10+i.fireRisk,T=n.health+i.health,E=n.trust+i.trust,S=n.corruption+i.corruption,R=n.shadowEconomy+i.shadow,A=n.resilience+i.resilience,P=n.innovation+i.innovation+i.education*.35,L=n.monetaryTrust+e.bank*3+e.townHall*2+i.monetaryTrust,M=n.liquidity+e.bank*4+e.mainStreet*1.5+i.liquidity,y=n.credit+e.bank*8+e.factory*1.2+e.residential*.8+i.credit,C=n.inflation+Math.max(0,n.money-3500)*.002+i.inflation,N=n.bankStability+e.bank*3+e.townHall*1.5-n.debt*.004+i.bankStability,k=n.tradeConfidence+e.railStation*3+e.bank*2+i.freight*.04+i.tradeConfidence,W=i.fuelDependency,V=i.education,q=e.factory*8+e.coalPlant*6+e.dieselDepot*4;K(r),K(s),K(o.effects);function K(ee){a+=ee.housing??0,l+=ee.jobs??0,c+=ee.food??0,d+=ee.powerSupply??0,h+=ee.powerDemand??0,f+=ee.freight??0,m+=ee.freightDemand??0,g+=ee.revenue??0,x+=ee.maintenance??0,p+=ee.pollution??0,u+=ee.fireRisk??0,T+=ee.health??0,E+=ee.trust??0,S+=ee.corruption??0,R+=ee.shadow??ee.shadowEconomy??0,A+=ee.resilience??0,P+=ee.innovation??0,L+=ee.monetaryTrust??0,M+=ee.liquidity??0,y+=ee.credit??0,C+=ee.inflation??0,N+=ee.bankStability??0,k+=ee.tradeConfidence??0,W+=ee.fuelDependency??0,V+=ee.education??0}const H=n.policies.taxRate;H==="low"?(g*=.74,E+=5,S-=1):H==="high"&&(g*=1.34,E-=7,S+=3,R+=2),n.policies.publicWorks==="minimal"?(x-=5,A-=6,T-=2):n.policies.publicWorks==="aggressive"&&(x+=18,A+=13,T+=4,E+=3),n.policies.regulation==="loose"?(l*=1.12,g*=1.12,u+=8,p+=8,T-=5,E-=2):n.policies.regulation==="strict"&&(l*=.93,g*=.94,x+=8,u-=9,p-=7,T+=6,E+=4),n.policies.alcohol==="legal"?(g+=e.saloon*18,R+=e.saloon*2,u+=e.saloon*1.2,E-=e.saloon>2?2:0):n.policies.alcohol==="regulated"?(g+=e.saloon*10,R+=e.saloon):(x+=12+e.sheriff*2,g-=e.saloon*8,R+=10+e.speakeasy*6,S+=6,E+=e.temperanceHall>0?2:-2),n.policies.utility==="private"?(x-=10,g+=12,S+=3,E-=d<h?5:1):n.policies.utility==="public"&&(x+=12,E+=d>=h?5:-7,S-=1),n.policies.labor==="suppress"?(l*=1.07,g*=1.05,E-=e.unionHall>0?7:2,T-=2):n.policies.labor==="support"&&(x+=10,g*=.96,T+=4,E+=5,u-=2),n.policies.media==="booster"?(g*=1.04,E+=p<45&&S<40?3:-3):n.policies.media==="sensational"?(E-=3,S-=2,R+=1):n.policies.media==="industry"?(g*=1.08,l*=1.04,S+=3,E-=p>50?5:1):(E+=2,S-=1),n.policies.banking==="cautious"?(y-=8,M-=2,N+=10,C-=4,E+=1):n.policies.banking==="speculative"&&(y+=15,M+=7,N-=12,C+=8,S+=3,g*=1.06),n.doctrines.electric==="dc"?(A+=3,E+=d>=h?2:0,n.population>850&&(x+=Math.ceil((n.population-850)/55),d*=.86)):n.doctrines.electric==="ac"?(d*=1.18,P+=4,A+=e.substation>1?2:-5,E-=V<24?4:0):(d*=1.1,x+=8,A+=6,P+=5),n.doctrines.transport==="horse"?(f*=.82,W-=8,p-=2):n.doctrines.transport==="gasoline"?(f+=18+e.road*1.5,g*=1.05,W+=18,u+=7):n.doctrines.transport==="diesel"?(f*=1.22,c*=1.12,A+=5,W+=22,p+=7):n.doctrines.transport==="rail"?(f+=24+e.rail*4+e.railStation*14,x+=12,p+=5):n.doctrines.transport==="streetcar"&&(E+=5,p-=4,h+=8,x+=8,f+=e.streetcar*4),n.doctrines.money==="hardMoney"?(L+=9,k+=10,C-=8,y-=10,M-=6,N+=6,g*=.97):n.doctrines.money==="bimetal"?(y+=8,M+=8,c*=1.06,C+=9,k-=5,E+=e.farm>1?3:0):n.doctrines.money==="greenbacks"?(M+=14,y+=5,C+=12,L-=n.debt>1600?8:3,n.policies.publicWorks==="aggressive"&&(A+=5,g+=18)):n.doctrines.money==="bankCredit"?(y+=18,M+=8,N-=8,C+=6,a*=1.04,l*=1.04,g*=1.07):n.doctrines.money==="municipalBonds"?(M+=10,A+=n.policies.publicWorks==="aggressive"?7:3,x+=8,N-=n.debt>1800?8:2,k+=2):n.doctrines.money==="companyScrip"?(l*=1.08,g*=1.08,y+=6,L-=12,E-=e.unionHall>0?7:4,S+=7,R+=4):n.doctrines.money==="localScrip"&&(M+=16,y+=4,k-=14,L-=8,C+=6,R+=3);const se=Me(n.debt/Math.max(350,g+180)*18,0,100);se>45&&(E-=(se-45)*.08,N-=(se-45)*.16,L-=(se-45)*.1),y<35?(l*=.97,a*=.98,g*=.96):y>65&&(l*=1.03,a*=1.03,g*=1.03,C+=2),g*=.88+Me(k,0,100)/500,g*=1-Me(C-45,0,60)/450,E-=Me(C-45,0,80)*.08,L-=Me(C-40,0,80)*.12;const de=Me(d/Math.max(1,h),0,1.25),ve=Me(f/Math.max(1,m),0,1.25),ze=Me(a/Math.max(1,n.population),0,1.4),Ze=Me(l/Math.max(1,n.population*.48),0,1.4),tt=Me(c/Math.max(1,n.population*.32),0,1.4);de<1&&(E-=(1-de)*16,g*=.85+de*.15),ve<1&&(g*=.82+ve*.18,E-=(1-ve)*5),p=Me(p+Math.max(0,W-50)*.08,0,100),u=Me(u-e.fireStation*7-e.waterPump*3,0,100),T=Me(T-p*.12-Math.max(0,u-55)*.05,0,100),E=Me(E-S*.06-R*.05+Math.max(0,T-60)*.03,0,100),S=Me(S,0,100),R=Me(R,0,100),A=Me(A-Math.max(0,W-60)*.12+e.publicWorks*2,0,100),P=Me(P,0,100),L=Me(L-R*.04-S*.04,0,100),M=Me(M,0,100),y=Me(y,0,100),C=Me(C,0,100),N=Me(N-Math.max(0,y-70)*.12+L*.04,0,100),k=Me(k+L*.05-C*.06,0,100);const qe=Math.max(0,x+n.debt*(.004+se/2e4)),$=Math.max(0,g),Z=Math.round($-qe);return{counts:e,housing:Math.round(a),jobs:Math.round(l),food:Math.round(c),powerSupply:Math.round(d),powerDemand:Math.round(h),powerReliability:de,freight:Math.round(f),freightDemand:Math.round(m),freightReliability:ve,fuelDependency:Math.round(Me(W,0,100)),maintenance:Math.round(x),revenue:Math.round($),expenses:Math.round(qe),netIncome:Z,pollution:Math.round(p),fireRisk:Math.round(u),health:Math.round(T),trust:Math.round(E),corruption:Math.round(S),shadowEconomy:Math.round(R),resilience:Math.round(A),innovation:Math.round(P),monetaryTrust:Math.round(L),liquidity:Math.round(M),credit:Math.round(y),inflation:Math.round(C),debtBurden:Math.round(se),bankStability:Math.round(N),tradeConfidence:Math.round(k),education:Math.round(V),industrialPressure:Math.round(q),roadAccess:o.roadAccess,civicCoverage:o.civicCoverage,industrialConflict:o.industrialConflict,districtSynergy:o.districtSynergy,developedPlots:t,completedProjects:(n.completedProjects??[]).length,completedMilestones:(n.completedMilestones??[]).length,housingRatio:ze,jobsRatio:Ze,foodRatio:tt}}function hm(n){const e={housing:0,jobs:0,food:0,powerSupply:0,powerDemand:0,freight:0,freightDemand:0,revenue:0,maintenance:0,pollution:0,fireRisk:0,health:0,trust:0,corruption:0,shadow:0,resilience:0,innovation:0,education:0,fuelDependency:0,monetaryTrust:0,liquidity:0,credit:0,inflation:0,bankStability:0,tradeConfidence:0};return Po(n,t=>{var r;const i=((r=wt[t])==null?void 0:r.effects)??{};for(const[s,o]of Object.entries(i))e[s]=(e[s]??0)+o}),e}function fm(n){var t;const e={};for(const i of n.completedProjects??[]){const r=((t=Si[i])==null?void 0:t.effects)??{};yt(e,r)}return e}function pm(n){const e={};let t=0,i=0,r=0,s=0,o=0;return Po(n,(a,l,c,d)=>{if(a==="road"||a==="rail"||a==="powerLine")return;t+=1;const h=za(n,c,d,1),f=za(n,c,d,2),m=Tt(h,["road","rail","railStation","streetcar"]),g=Tt(f,["park","school","library","clinic","settlementHouse","townHall"]),x=Tt(f,["factory","coalPlant","gasolineDepot","dieselDepot"]);m?(i+=1,yt(e,{freight:.8,revenue:1.1,maintenance:.1})):yt(e,{trust:-.45,freightDemand:.35,maintenance:.4}),a==="residential"&&(g&&(r+=1,yt(e,{trust:1.6,health:1.2,housing:5})),x&&(s+=1,yt(e,{trust:-1.4,health:-1.3,fireRisk:1.8,pollution:1.3})),Tt(h,["mainStreet"])&&yt(e,{housing:5,revenue:.8})),a==="mainStreet"&&(Tt(f,["bank","telegraphOffice","newspaper","townHall","courthouse"])&&(o+=1,yt(e,{revenue:5,tradeConfidence:2,monetaryTrust:.6})),Tt(h,["road","streetcar"])&&yt(e,{jobs:2,revenue:2})),(a==="factory"||a==="machineShop")&&(Tt(f,["rail","railStation","machineShop","powerLine","substation"])&&(o+=1,yt(e,{jobs:4,revenue:6,freight:5,freightDemand:1})),Tt(f,["unionHall","clinic","fireStation"])&&yt(e,{health:1.4,trust:.9,fireRisk:-1.5})),a==="farm"&&(Tt(f,["grainElevator","railStation","road"])&&(o+=1,yt(e,{food:10,freight:3,revenue:2})),Tt(f,["dieselDepot"])&&yt(e,{food:8,fuelDependency:1.5})),["coalPlant","dcPlant","acPlant","hydroPlant"].includes(a)&&(Tt(f,["substation","powerLine","batteryHouse"])&&(o+=1,yt(e,{powerSupply:5,resilience:1.8,maintenance:.8})),Tt(f,["waterPump","fireStation"])&&yt(e,{fireRisk:-1.4,resilience:1})),a==="bank"&&Tt(f,["courthouse","telegraphOffice","newspaper","insuranceOffice"])&&(o+=1,yt(e,{bankStability:4,monetaryTrust:2,tradeConfidence:2,credit:1})),(a==="saloon"||a==="speakeasy")&&(Tt(f,["sheriff","courthouse"])&&yt(e,{shadow:-2,corruption:-.8}),Tt(f,["mainStreet"])&&yt(e,{revenue:2,fireRisk:.8})),(a==="sewerWorks"||a==="waterPump")&&Tt(f,["residential","clinic","factory"])&&(r+=1,yt(e,{health:2,fireRisk:-1.5,resilience:1.5}))}),{effects:e,roadAccess:t?Math.round(i/t*100):100,civicCoverage:t?Math.round(r/t*100):0,industrialConflict:s,districtSynergy:o}}function za(n,e,t,i){var s;const r=[];for(let o=-i;o<=i;o+=1)for(let a=-i;a<=i;a+=1){if(a===0&&o===0||Math.abs(a)+Math.abs(o)>i)continue;const c=(s=Ao(n,e+a,t+o))==null?void 0:s.buildingId;c&&r.push(c)}return r}function Tt(n,e){return e.some(t=>n.includes(t))}function yt(n,e){for(const[t,i]of Object.entries(e))n[t]=(n[t]??0)+i}function Co(n){const e=Object.fromEntries(Object.keys(wt).map(t=>[t,0]));return Po(n,t=>{e[t]=(e[t]??0)+1}),e}function Po(n,e){for(let t=0;t<n.grid.length;t+=1)for(let i=0;i<n.grid[t].length;i+=1){const r=n.grid[t][i];r.buildingId&&e(r.buildingId,r,i,t)}}function Ha(n){if(n.gameOver)return n;let e=Sn(n);const t=Bn(e);e.monthIndex+=1,e.turn+=1;const i=t.housingRatio*.8+t.jobsRatio*.9+t.foodRatio*.4+t.powerReliability*.45+t.freightReliability*.3+t.credit/140+t.liquidity/170+t.trust/80+t.health/100-t.pollution/130-t.corruption/190-t.inflation/230,r=Me((i-3.1)*.012,-.018,.026),s=Math.round(e.population*r);e.population=Math.max(40,e.population+s),e.money+=t.netIncome,e.trust=Me(t.trust+(s>0?.5:-1),0,100),e.health=Me(t.health,0,100),e.corruption=Me(t.corruption+(e.policies.taxRate==="high"?.4:-.1),0,100),e.shadowEconomy=Me(t.shadowEconomy+(e.policies.alcohol==="prohibition"?.9:-.1),0,100),e.resilience=Me(t.resilience,0,100),e.innovation=Me(t.innovation+(t.education>25?.45:0),0,100),e.monetaryTrust=Me(t.monetaryTrust+(t.netIncome>=0?.3:-.6),0,100),e.liquidity=Me(t.liquidity+(t.netIncome>=0?.2:-.8),0,100),e.credit=Me(t.credit+(e.policies.banking==="speculative"?.7:e.policies.banking==="cautious"?-.35:.1),0,100),e.inflation=Me(t.inflation+(e.doctrines.money==="hardMoney"?-.3:t.credit>62?.55:.1),0,100),e.bankStability=Me(t.bankStability+(t.monetaryTrust>60?.3:-.4),0,100),e.tradeConfidence=Me(t.tradeConfidence+(t.monetaryTrust>62?.25:-.35),0,100),e.transientEffects={},e.money<-450&&(e.money+=900,e.debt+=1100,e.trust=Me(e.trust-3,0,100),e.eventHistory=Fn(e.eventHistory,{headline:"Emergency Bond Keeps the Lights Almost On",summary:"The treasury borrowed because the alternative was explaining arithmetic to angry voters."}));const o=mm(e,t);o?e=gm(e,o):e.lastIssue=_m(e,t,s),e.eventHistory=Fn(e.eventHistory,e.lastIssue),e=Fr(e).state;const a=Cc(e);return a&&(e.collapseReason=a),e.gameOver=xm(e),e.gameOver&&!e.ending&&(e.ending=Or(e)),e}function mm(n,e){const t=Co(n),i=Wc.filter(o=>o.condition({state:n,stats:e,counts:t}));if(!i.length)return null;const r=Sm(n.seed+n.turn*1013+n.monthIndex*37);return r()<.42?null:i[Math.floor(r()*i.length)]}function gm(n,e){const t=Sn(n);for(const[i,r]of Object.entries(e.effect??{}))i==="money"||i==="debt"?t[i]+=r:i==="shadow"?t.shadowEconomy=Me(t.shadowEconomy+r,0,100):i==="monetaryTrust"?t.monetaryTrust=Me(t.monetaryTrust+r,0,100):i==="liquidity"?t.liquidity=Me(t.liquidity+r,0,100):i==="credit"?t.credit=Me(t.credit+r,0,100):i==="inflation"?t.inflation=Me(t.inflation+r,0,100):i==="bankStability"?t.bankStability=Me(t.bankStability+r,0,100):i==="tradeConfidence"?t.tradeConfidence=Me(t.tradeConfidence+r,0,100):i in t?t[i]=Me(t[i]+r,0,100):t.transientEffects[i]=(t.transientEffects[i]??0)+r;return t.lastIssue={headline:e.headline,summary:e.summary},t}function _m(n,e,t){if(n.monthIndex>0&&n.monthIndex%12===0)return vm(n,e);const i=e.netIncome>=0?"Treasury Turns Crank, Coins Fall Out":"Treasury Crank Squeaks, Coins Decline",r=t>8?"families arrive with furniture and expectations":t<0?"boarding houses discover vacancies":"the town holds steady and complains efficiently";return{headline:i,summary:`This month ${r}. Net ledger: ${Lt(e.netIncome)}. Power ${(e.powerReliability*100).toFixed(0)}%, freight ${(e.freightReliability*100).toFixed(0)}%, trust ${e.trust}.`}}function vm(n,e){const t=On(n),i=[["inflation",e.inflation],["corruption",e.corruption],["shadow money",e.shadowEconomy],["pollution",e.pollution],["debt service",e.debtBurden]].sort((s,o)=>o[1]-s[1])[0],r=[["power",Math.round(e.powerReliability*100)],["freight",Math.round(e.freightReliability*100)],["public trust",e.trust],["bank confidence",e.bankStability],["trade confidence",e.tradeConfidence]].sort((s,o)=>o[1]-s[1])[0];return{headline:`${t} Annual Ledger: ${Ga(r[0])} Leads, ${Ga(i[0])} Answers`,summary:`The yearly edition names ${r[0]} as the town's strongest engine and ${i[0]} as the pressure most likely to collect interest. Net ledger: ${Lt(e.netIncome)}.`}}function xm(n){return On(n)>lo||!!Cc(n)}function Cc(n){return n.collapseReason?n.collapseReason:n.trust<=4?"Public Trust Collapsed":n.health<=4?"Public Health Collapsed":n.money<-1500?"The Treasury Broke":n.debt>6200?"Debt Burden Broke the Charter":n.monetaryTrust<=4?"Money Stopped Meaning Enough":n.inflation>=96&&n.bankStability<=12?"Prices Outran the Banks":n.population<45?"The Town Emptied Out":""}function Or(n){const e=Bn(n),t={population:Me(Math.round(n.population/2200*100),0,100),economy:Me(Math.round((e.revenue+e.jobs)/420*100),0,100),power:Me(Math.round(e.powerReliability*85),0,100),freight:Me(Math.round(e.freightReliability*85),0,100),trust:e.trust,health:e.health,pollution:100-e.pollution,resilience:e.resilience,corruption:100-e.corruption,shadow:100-e.shadowEconomy,innovation:e.innovation,monetaryTrust:e.monetaryTrust,inflation:100-e.inflation,bankStability:e.bankStability,tradeConfidence:e.tradeConfidence,access:e.roadAccess,civicCoverage:e.civicCoverage,development:Me(Math.round(e.developedPlots/42*100+(n.completedProjects??[]).length*5+(n.completedMilestones??[]).length*3),0,100)},i=Object.values(t).reduce((c,d)=>c+d,0)/Object.values(t).length,r=Me(.45+t.development/140,.45,1),s=Math.round(i*r),o=ko.find(c=>c.condition(t,n,e))??ko.at(-1),a=On(n)>lo&&!n.collapseReason,l=n.collapseReason?`Ledger Closes Early: ${n.collapseReason}`:a?`${o.title} Declared After Fifty-Five Years of Machinery`:`Ledger Closed Early: ${o.title}`;return{title:o.title,headline:l,summary:o.summary,score:t,total:s,stats:e}}function ym(n){const e=Sn(n);return On(e)<=lo&&!e.collapseReason&&(e.collapseReason="Council Closed the Books"),e.gameOver=!0,e.ending=Or(e),e}function qt(n){window.localStorage.setItem(wc,JSON.stringify(n))}function Pc(){const n=window.localStorage.getItem(wc);if(!n)return null;try{const e=JSON.parse(n);return!(e!=null&&e.grid)||!(e!=null&&e.policies)||!(e!=null&&e.doctrines)?null:Mm(e)}catch{return null}}function Mm(n){return{...n,version:2,charterId:n.charterId??"balanced",completedProjects:Array.isArray(n.completedProjects)?n.completedProjects:[],completedMilestones:Array.isArray(n.completedMilestones)?n.completedMilestones:[],transientEffects:n.transientEffects??{},policies:{...$a,...n.policies??{}},doctrines:{...Ya,...n.doctrines??{}},eventHistory:Array.isArray(n.eventHistory)?n.eventHistory:[],lastIssue:n.lastIssue??{headline:"Recovered Ledger Opens to a Blank Page",summary:"The save file loaded, though its newspaper archives arrived without ceremony."}}}function Fn(n,e){return[e,...n].slice(0,12)}function Lt(n){return`${n<0?"-":""}$${Math.abs(Math.round(n)).toLocaleString("en-US")}`}function Me(n,e,t){return Math.min(t,Math.max(e,n))}function Sm(n){let e=n>>>0;return function(){e+=1831565813;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Wi(n){return String(n).replace(/([A-Z])/g," $1").replace(/[-_]/g," ").toLowerCase()}function Ga(n){return Wi(n).replace(/\b\w/g,e=>e.toUpperCase())}let j=Oi(),jn={x:8,y:8},Mt="Choose a building, click the map, then advance the newspaper month by month.";const Va="engines-of-independence.firstLedgerDismissed.v1",bm=new Set(["maintenance","pollution","fireRisk","corruption","shadow","shadowEconomy","inflation","fuelDependency","powerDemand","freightDemand"]),Em={housing:"housing",jobs:"jobs",food:"food",powerSupply:"power",powerDemand:"power demand",freight:"freight",freightDemand:"freight demand",revenue:"revenue",maintenance:"maintenance",pollution:"pollution",fireRisk:"fire risk",health:"health",trust:"trust",corruption:"corruption",shadow:"shadow economy",shadowEconomy:"shadow economy",resilience:"resilience",innovation:"innovation",education:"education",fuelDependency:"fuel dependence",monetaryTrust:"money trust",liquidity:"liquidity",credit:"credit",inflation:"inflation",bankStability:"banking",tradeConfidence:"trade confidence"},ce={renderTarget:document.querySelector("#render-target"),hudStats:document.querySelector("#hud-stats"),buildMenu:document.querySelector("#build-menu"),policyControls:document.querySelector("#policy-controls"),doctrineControls:document.querySelector("#doctrine-controls"),projectControls:document.querySelector("#project-controls"),forecastPanel:document.querySelector("#forecast-panel"),firstLedger:document.querySelector("#first-ledger"),advisorPanel:document.querySelector("#advisor-panel"),charterGoals:document.querySelector("#charter-goals"),selectedTile:document.querySelector("#selected-tile"),newspaperHeadline:document.querySelector("#newspaper-headline"),newspaperCopy:document.querySelector("#newspaper-copy"),issueDate:document.querySelector("#issue-date"),eventFeed:document.querySelector("#event-feed"),nextTurnButton:document.querySelector("#next-turn-button"),yearButton:document.querySelector("#year-button"),bondButton:document.querySelector("#bond-button"),endNowButton:document.querySelector("#end-now-button"),resetViewButton:document.querySelector("#reset-view-button"),focusMapButton:document.querySelector("#focus-map-button"),newGameButton:document.querySelector("#new-game-button"),saveButton:document.querySelector("#save-button"),titleScreen:document.querySelector("#title-screen"),charterSelect:document.querySelector("#charter-select"),charterBrief:document.querySelector("#charter-brief"),howButton:document.querySelector("#how-button"),howPanel:document.querySelector("#how-panel"),startGameButton:document.querySelector("#start-game-button"),loadGameButton:document.querySelector("#load-game-button"),confirmScreen:document.querySelector("#confirm-screen"),confirmEndButton:document.querySelector("#confirm-end-button"),cancelEndButton:document.querySelector("#cancel-end-button"),endingScreen:document.querySelector("#ending-screen"),endingTitle:document.querySelector("#ending-title"),endingSummary:document.querySelector("#ending-summary"),endingMeta:document.querySelector("#ending-meta"),endingArticle:document.querySelector("#ending-article"),endingScores:document.querySelector("#ending-scores"),recapFallback:document.querySelector("#recap-fallback"),copySummaryButton:document.querySelector("#copy-summary-button"),inspectButton:document.querySelector("#inspect-button"),restartButton:document.querySelector("#restart-button"),toastLayer:document.querySelector("#toast-layer")},Bi=new tm(ce.renderTarget,(n,e)=>Am(n,e),(n,e)=>{jn={x:n,y:e},Dr()});Tm();wm();Dc();Pt();function Tm(){ce.startGameButton.addEventListener("click",()=>{j=Oi(ce.charterSelect.value),Mt="The charter is signed. Open the Town Clerk's First Ledger, then put down roads, housing, jobs, and an engine.",Wa(),Dt("Town Clerk's First Ledger opened.","good"),qt(j),Pt()}),ce.loadGameButton.addEventListener("click",()=>{const n=Pc();j=n??Oi(ce.charterSelect.value),Mt=n?"Local save restored.":"No local save found; a new town has been chartered.",Wa(),Dt(n?"Saved town restored.":"No save found; new charter opened.",n?"good":""),Pt()}),ce.howButton.addEventListener("click",()=>{ce.howPanel.classList.toggle("hidden"),ce.howButton.textContent=ce.howPanel.classList.contains("hidden")?"HOW THE ENGINES WORK":"HIDE ENGINE NOTES"}),ce.newGameButton.addEventListener("click",()=>{window.confirm("Start a new town and overwrite the local save?")&&(j=Oi(j.charterId??ce.charterSelect.value),Mt="New charter filed. The machinery is clean, for now.",qt(j),Dt("New charter filed.","good"),vs(),Pt())}),ce.saveButton.addEventListener("click",()=>{qt(j),Mt="Local save written to this browser.",Pt()}),ce.nextTurnButton.addEventListener("click",()=>{j=Ha(j),Mt=j.gameOver?"The final edition is on the press.":"A new issue of the Engine Gazette has landed.",Xa(),qt(j),Pt()}),ce.yearButton.addEventListener("click",()=>{let n=0;for(;n<12&&!j.gameOver;)j=Ha(j),n+=1;Mt=j.gameOver?`Ran ${n} month${n===1?"":"s"} before the final edition hit the press.`:"A year of machinery, weather, money, and argument has passed.",Xa(),qt(j),Pt()}),ce.bondButton.addEventListener("click",()=>{j=dm(j),Mt="Bond funding issued. Public capacity rises; future patience falls.",Dt("Public works funded.","good"),qt(j),Pt()}),ce.endNowButton.addEventListener("click",()=>{ce.confirmScreen.classList.remove("hidden")}),ce.cancelEndButton.addEventListener("click",()=>{ce.confirmScreen.classList.add("hidden")}),ce.confirmEndButton.addEventListener("click",()=>{j=ym(j),Mt="The ledger has been closed early.",ce.confirmScreen.classList.add("hidden"),Dt("Final edition printed.","good"),qt(j),Pt()}),ce.resetViewButton.addEventListener("click",()=>{Bi.resetView()}),ce.focusMapButton.addEventListener("click",()=>{document.body.classList.toggle("focus-map"),ce.focusMapButton.textContent=document.body.classList.contains("focus-map")?"Show UI":"Focus Map"}),window.addEventListener("keydown",n=>{n.key.toLowerCase()==="f"&&!n.ctrlKey&&!n.metaKey&&!n.altKey&&(document.body.classList.toggle("focus-map"),ce.focusMapButton.textContent=document.body.classList.contains("focus-map")?"Show UI":"Focus Map"),n.key==="Escape"&&document.body.classList.contains("focus-map")&&(document.body.classList.remove("focus-map"),ce.focusMapButton.textContent="Focus Map"),n.key==="Escape"&&!ce.confirmScreen.classList.contains("hidden")&&ce.confirmScreen.classList.add("hidden")}),ce.inspectButton.addEventListener("click",()=>{vs()}),ce.copySummaryButton.addEventListener("click",async()=>{const n=j.ending??Or(j),e=Ym(n);try{await navigator.clipboard.writeText(e),ce.copySummaryButton.textContent="Copied",ce.recapFallback.classList.add("hidden"),Dt("Recap copied.","good"),setTimeout(()=>{ce.copySummaryButton.textContent="Copy Recap"},1400)}catch{ce.recapFallback.value=e,ce.recapFallback.classList.remove("hidden"),ce.recapFallback.focus(),ce.recapFallback.select(),Dt("Clipboard blocked. Recap is selectable below.","bad")}}),ce.restartButton.addEventListener("click",()=>{j=Oi(j.charterId??ce.charterSelect.value),Mt="Another town takes its first breath of smoke and ambition.",qt(j),vs(),Pt()}),ce.charterSelect.addEventListener("change",()=>{Lc()})}function Wa(){document.body.classList.remove("title-mode"),ce.titleScreen.classList.add("hidden")}function Dc(){ce.loadGameButton.hidden=!Pc()}function wm(){ce.charterSelect.innerHTML=Object.values(Mn).map(n=>`<option value="${me(n.id)}">${me(n.name)}</option>`).join(""),Lc()}function Lc(){const n=Mn[ce.charterSelect.value]??Mn.balanced,e={balanced:"Low pressure",industrial:"Smoke and debt pressure",reform:"Budget pressure",speculative:"Inflation pressure"}[n.id]??"Mixed pressure";ce.charterBrief.innerHTML=`
    <strong>${me(n.name)}</strong>
    <span>${me(e)}. ${me(n.description)}</span>
  `}function Am(n,e){var i;if(j.gameOver)return;const t=sm(j,n,e,j.selectedBuildingId);j=t.state,Mt=t.message,t.ok?(qt(j),Dt(Rm(j.selectedBuildingId),"good")):Dt(Cm(t.message),"bad"),Pt(),t.ok&&((i=Bi.pulseTile)==null||i.call(Bi,n,e))}function Rm(n){const e=wt[n],t=(e==null?void 0:e.name)??"Engine";return{road:"Road extended.",residential:"Housing added.",coalPlant:"Coal engine online.",dcPlant:"Local current online.",acPlant:"Grid engine online.",bank:"Bank chartered.",newspaper:"Newspaper press started.",publicWorks:"Public works funded.",rail:"Freight corridor laid."}[n]??`${t} added.`}function Cm(n){const e=n.toLowerCase();return e.includes("treasury")||e.includes("needs $")?"Need more money.":e.includes("already")?"That tile is occupied.":e.includes("river")||e.includes("water")?"This engine requires river access.":e.includes("unlock")?"This policy unlocks later.":e.includes("civic")||e.includes("trust")?"Build civic support before this engine can stabilize.":n||"This placement will not work yet."}function Pt(){Ic(),Fm(),Om(),Bm(),km(),Pm(),Dm(),Wm(),Im(),Dr(),qm(),Bi.renderState(j),j.gameOver&&$m(),Dc()}function Pm(){if(window.localStorage.getItem(Va)==="dismissed"||j.turn>18||j.gameOver||!ce.titleScreen.classList.contains("hidden")){ce.firstLedger.innerHTML="";return}ce.firstLedger.innerHTML=`
    <div class="first-ledger-heading">
      <div>
        <p class="eyebrow">Town Clerk's First Ledger</p>
        <strong>Make independence practical.</strong>
      </div>
      <button class="small-button" type="button" data-dismiss-first-ledger>Dismiss</button>
    </div>
    <ul>
      <li>Build roads to open the map.</li>
      <li>Add housing so people can live near the engine.</li>
      <li>Add jobs so independence is not just decorative.</li>
      <li>Choose an early power engine.</li>
      <li>Watch freight, access, civic trust, banks, inflation, corruption, and unrest before ending the year.</li>
    </ul>
  `,ce.firstLedger.querySelector("[data-dismiss-first-ledger]").addEventListener("click",()=>{window.localStorage.setItem(Va,"dismissed"),ce.firstLedger.innerHTML="",Dt("Town Clerk's First Ledger dismissed.","")})}function Dm(){var t;const n=Bn(j),e=Lm(n);ce.advisorPanel.innerHTML=`
    <div class="advisor-heading">
      <p class="eyebrow">Town Desk</p>
      <span>${me(((t=Mn[j.charterId])==null?void 0:t.name)??"Balanced Charter")}</span>
    </div>
    <div class="advisor-list">
      ${e.map(i=>`
            <div class="advisor-card ${i.tone}">
              <strong>${me(i.title)}</strong>
              <span>${me(i.copy)}</span>
            </div>
          `).join("")}
    </div>
  `}function Lm(n){const e=[],t=On(j),i=n.counts;j.turn<2&&e.push({tone:"good",title:"Open with a skeleton",copy:"Roads and Main Street create access. Add housing, one job engine, and power before you mash Run Year."}),n.powerReliability<.9?e.push({tone:"bad",title:"Power is thin",copy:"DC, coal, hydro, lines, substations, or battery houses keep growth from stalling."}):(i.dcPlant??0)+(i.coalPlant??0)+(i.hydroPlant??0)+(i.acPlant??0)===0&&e.push({tone:"",title:"First engine due",copy:"The baseline works for lamps and muscle. A real plant turns the town into an industrial argument."}),n.freightReliability<.9&&e.push({tone:"bad",title:"Freight is choking",copy:"Roads, rails, depots, grain elevators, and rail stations make the economy less muddy."}),n.industrialConflict>=2&&e.push({tone:"bad",title:"Homes smell the mills",copy:"Separate industry from housing, then add parks, clinics, fire stations, or union halls."}),n.bankStability<45||n.monetaryTrust<45?e.push({tone:"bad",title:"Money is wobbling",copy:"Cautious banking, hard money, bank examiners, audits, and lower debt calm the credit engine."}):n.inflation>70&&e.push({tone:"bad",title:"Prices are loud",copy:"Inflation will eat trust if banks also weaken. Slow credit, watch debt, and build confidence."}),n.civicCoverage<25&&j.population>250&&e.push({tone:"",title:"Care is lagging",copy:"Schools, clinics, parks, pumps, sewer works, and settlement houses make growth survivable."});const r=Object.values(Si).find(s=>!(j.completedProjects??[]).includes(s.id)&&Ro(j,s.id).ok);return r&&e.push({tone:"good",title:`${r.name} is ready`,copy:"Civic projects are permanent public machinery. They are boring until they save the run."}),t>=1890&&n.innovation<22&&e.push({tone:"",title:"Innovation unlocks tools",copy:"Schools, libraries, machine shops, telegraphs, radio, and patents move the build menu forward."}),e.length||e.push({tone:"good",title:"Choose an identity",copy:"The town is stable enough to pursue clean power, freight empire, public works, or credit machine."}),e.slice(0,3)}function Im(){const n=Bn(j),e=[["Date",Ac(j)],["Money",Lt(j.money)],["Debt",Lt(j.debt)],["Population",j.population.toLocaleString("en-US")],["Jobs/Housing",`${n.jobs}/${n.housing}`],["Power",`${n.powerSupply}/${n.powerDemand}`],["Freight",`${n.freight}/${n.freightDemand}`],["Net",Lt(n.netIncome)],["Trust",Ht(n.trust)],["Health",Ht(n.health)],["Money Trust",Ht(n.monetaryTrust)],["Credit",Ht(n.credit)],["Inflation",Ht(n.inflation,!0)],["Banking",Ht(n.bankStability)],["Pollution",Ht(n.pollution,!0)],["Fire",Ht(n.fireRisk,!0)],["Fuel Depend.",Ht(n.fuelDependency,!0)],["Trade Conf.",Ht(n.tradeConfidence)],["Resilience",Ht(n.resilience)],["Corruption",Ht(n.corruption,!0)],["Shadow",Ht(n.shadowEconomy,!0)]];ce.hudStats.innerHTML=e.map(([t,i])=>`<div class="hud-stat"><span>${me(t)}</span><strong>${i}</strong></div>`).join("")}function Ht(n,e=!1){return`<span class="${e?n>=65?"bad":n<=25?"good":"":n>=65?"good":n<=25?"bad":""}">${Math.round(n)}</span>`}function Ic(){const n=Nm();ce.buildMenu.innerHTML=Object.entries(n).map(([e,t])=>`
      <section class="build-category">
        <h3>${me(e)}</h3>
        <div class="build-buttons">
          ${t.map(i=>Um(i)).join("")}
        </div>
      </section>
    `).join(""),ce.buildMenu.querySelectorAll("[data-building-id]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.buildingId;if(e.classList.contains("locked")){Mt=Pr(j,t),Dr();return}j={...j,selectedBuildingId:t},Mt=`${wt[t].name} selected. ${wt[t].description}`,Ic(),Dr()})})}function Um(n){const e=Pr(j,n.id),t=!!e,i=j.selectedBuildingId===n.id,r=Nr(j,n.id);return`
    <button
      class="build-button ${i?"active":""} ${t?"locked":""}"
      data-building-id="${me(n.id)}"
      type="button"
      title="${me(t?e:n.description)}"
    >
      <strong>${me(n.name)}</strong>
      <span>${Lt(r)} - ${me(t?e:n.description)}</span>
    </button>
  `}function Nm(){return Object.values(wt).reduce((n,e)=>{var t;return n[t=e.category]??(n[t]=[]),n[e.category].push(e),n},{})}function Fm(){ce.policyControls.innerHTML=Object.entries(Bo).map(([n,e])=>Nc("policy",n,e,j.policies[n])).join(""),ce.policyControls.querySelectorAll("select[data-policy-key]").forEach(n=>{n.addEventListener("change",()=>{j=lm(j,n.dataset.policyKey,n.value),Mt=`${Bo[n.dataset.policyKey].label} changed.`,Dt("Policy enacted.","good"),qt(j),Pt()})})}function Om(){ce.doctrineControls.innerHTML=Object.entries(Dn).map(([n,e])=>Nc("doctrine",n,e,j.doctrines[n])).join(""),ce.doctrineControls.querySelectorAll("select[data-doctrine-key]").forEach(n=>{n.addEventListener("change",()=>{j=um(j,n.dataset.doctrineKey,n.value),Mt=`${Dn[n.dataset.doctrineKey].label} changed.`,Dt("Engine doctrine rewritten.","good"),qt(j),Pt()})})}function Bm(){ce.projectControls.innerHTML=Object.values(Si).map(n=>{const e=(j.completedProjects??[]).includes(n.id),t=Ro(j,n.id),i=!e&&!t.ok,r=n.debt?`, +${Lt(n.debt)} debt`:"";return`
        <button
          class="project-button ${e?"completed":""} ${i?"locked":""}"
          type="button"
          data-project-id="${me(n.id)}"
          title="${me(e?"Completed.":i?t.reason:n.description)}"
        >
          <strong>${me(n.name)}</strong>
          <span>${e?"Completed":`${Lt(n.cost)}${r} - ${me(i?t.reason:n.description)}`}</span>
        </button>
      `}).join(""),ce.projectControls.querySelectorAll("[data-project-id]").forEach(n=>{n.addEventListener("click",()=>{const e=n.dataset.projectId;if(n.classList.contains("completed")){Mt=`${Si[e].name} is already part of the town machine.`,Pt();return}const t=am(j,e);j=t.state,Mt=t.message,t.ok?(Dt("Public works funded.","good"),qt(j)):Dt(t.message,"bad"),Pt()})})}function km(){const n=Bn(j),e=zm(n),t=Hm(n),i=[{label:"Budget",value:Lt(n.netIncome),tone:n.netIncome>=20?"good":n.netIncome<0?"bad":""},{label:"Power",value:`${Math.round(n.powerReliability*100)}%`,tone:n.powerReliability>=1?"good":n.powerReliability<.85?"bad":""},{label:"Freight",value:`${Math.round(n.freightReliability*100)}%`,tone:n.freightReliability>=1?"good":n.freightReliability<.85?"bad":""},{label:"Access",value:`${n.roadAccess}%`,tone:n.roadAccess>=75?"good":n.roadAccess<50?"bad":""},{label:"Civic",value:`${n.civicCoverage}%`,tone:n.civicCoverage>=45?"good":n.civicCoverage<20?"bad":""},{label:"Conflict",value:`${n.industrialConflict}`,tone:n.industrialConflict>=3?"bad":n.industrialConflict===0?"good":""},{label:"Banks",value:`${n.bankStability}`,tone:n.bankStability>=65?"good":n.bankStability<35?"bad":""},{label:"Inflation",value:`${n.inflation}`,tone:n.inflation<=25?"good":n.inflation>=65?"bad":""}];ce.forecastPanel.innerHTML=`
    <p class="eyebrow">Pressure Ledger</p>
    <div class="pressure-stance">
      <strong>${me(Dn.money.options[j.doctrines.money].label)}</strong>
      <span>${me(Dn.transport.options[j.doctrines.transport].label)} / ${me(Dn.electric.options[j.doctrines.electric].label)}</span>
    </div>
    <div class="forecast-grid">
      ${i.map(r=>`
            <div class="forecast-pill ${r.tone}">
              <span>${me(r.label)}</span>
              <strong>${me(r.value)}</strong>
            </div>
          `).join("")}
    </div>
    <div class="pressure-columns">
      <div>
        <strong>Top benefits</strong>
        <ul>${e.map(r=>`<li>${me(r)}</li>`).join("")}</ul>
      </div>
      <div>
        <strong>Top pressures</strong>
        <ul>${t.map(r=>`<li>${me(r)}</li>`).join("")}</ul>
      </div>
    </div>
    <p class="consequence-line">${me(Gm(n))}</p>
    <p>${me(Vm(n))}</p>
  `}function zm(n){return[["Power surplus",Math.round((n.powerReliability-1)*100)],["Freight flow",Math.round((n.freightReliability-1)*100)],["Public trust",n.trust-50],["Civic health",n.health-50],["Bank confidence",n.bankStability-50],["Trade confidence",n.tradeConfidence-50],["Resilience",n.resilience-50],["Access",n.roadAccess-50]].filter(([,t])=>t>0).sort((t,i)=>i[1]-t[1]).slice(0,3).map(([t])=>t)}function Hm(n){const t=[["Inflation heat",n.inflation],["Corruption drag",n.corruption],["Shadow economy",n.shadowEconomy],["Fire risk",n.fireRisk],["Pollution",n.pollution],["Debt burden",n.debtBurden],["Industrial conflict",n.industrialConflict*16],["Civic gap",Math.max(0,45-n.civicCoverage)]].filter(([,i])=>i>8).sort((i,r)=>r[1]-i[1]).slice(0,3).map(([i])=>i);return t.length?t:["No dominant pressure yet"]}function Gm(n){return n.bankStability>=70&&n.credit>55?"The banks applaud. The workers squint.":j.policies.publicWorks==="aggressive"?"Public works rise, but the tax office has become a weather system.":j.policies.media==="sensational"||n.corruption>35?"The press smells a scandal and possibly breakfast.":n.shadowEconomy>30||j.policies.alcohol==="legal"?"The saloon economy reports record unofficial optimism.":(n.counts.coalPlant??0)>0||n.pollution>35?"The grid is alive, but the coal smoke has opinions.":"Independence is holding, provided the ledger keeps believing itself."}function Vm(n){const e=Uc(n);return e||(n.powerReliability<.85?"Power is the immediate bottleneck. Plants, lines, substations, or battery capacity would calm the machinery.":n.freightReliability<.85?"Freight is choking growth. Roads, rail, depots, grain elevators, or district access can loosen it.":n.industrialConflict>=3?"Industry is too close to homes. Parks, clinics, fire stations, unions, and cleaner siting can cool the street.":n.bankStability<35||n.monetaryTrust<35?"The money engine is wobbling. Bank examiners, hard money, audits, or slower credit can steady confidence.":n.civicCoverage<20?"The town is growing faster than care. Schools, clinics, parks, settlement houses, and sewer works will matter.":"No single pressure dominates. This is when a town quietly decides what kind of machine it wants to become.")}function Uc(n){return n.inflation>=70?"Inflation is heating up.":n.corruption>=55?"Corruption is becoming structural.":n.trust<=35?"Civic trust is thin.":n.shadowEconomy>=45?"The shadow economy is no longer shadow-sized.":n.freightReliability<.75?"Freight bottlenecks are choking growth.":n.industrialConflict>=4?"Unrest is entering the chat.":""}function Xa(){const n=Uc(Bn(j));n&&Dt(n,"bad")}function Wm(){const n=new Set(j.completedMilestones??[]),e=xi.filter(i=>!n.has(i.id)).slice(0,2),t=xi.filter(i=>n.has(i.id)).slice(-2);ce.charterGoals.innerHTML=`
    <div class="charter-heading">
      <p class="eyebrow">Charter Goals</p>
      <span>${n.size}/${xi.length}</span>
    </div>
    <div class="goal-list">
      ${e.map(i=>`
            <div class="goal-item">
              <strong>${me(i.name)}</strong>
              <span>${me(i.goal)}</span>
              <em>${me(i.rewardLabel)}</em>
            </div>
          `).join("")}
      ${e.length?"":'<div class="goal-item complete"><strong>Charter Complete</strong><span>The town has proved every public ambition on the docket.</span></div>'}
    </div>
    ${t.length?`<p class="recent-goals">Recent: ${t.map(i=>me(i.name)).join(", ")}</p>`:""}
  `}function Nc(n,e,t,i){const r=n==="policy"?"data-policy-key":"data-doctrine-key",s=t.options[i];return`
    <div class="policy-row">
      <label>
        <span>${me(t.label)}</span>
        <span>${me(s.label)}</span>
      </label>
      <select ${r}="${me(e)}" title="${me(s.description)}">
        ${Object.entries(t.options).map(([o,a])=>{const l=n==="doctrine"&&!Xm(e,o),c=l?" (crisis only)":"";return`<option value="${me(o)}" ${o===i?"selected":""} ${l?"disabled":""}>${me(a.label+c)}</option>`}).join("")}
      </select>
      <p>${me(s.description)}</p>
    </div>
  `}function Xm(n,e){if(n!=="money"||e!=="localScrip")return!0;const t=Bn(j);return j.money<0||t.monetaryTrust<45||t.bankStability<45||t.liquidity<35}function Dr(){var h;const n=wt[j.selectedBuildingId],e=(h=j.grid[jn.y])==null?void 0:h[jn.x],t=e!=null&&e.buildingId?wt[e.buildingId]:null,i=n&&e?Rc(j,jn.x,jn.y,n.id):{ok:!1,reason:""},r=t?t.name:(e==null?void 0:e.terrain)==="water"?"River":"Open Plot",s=(e==null?void 0:e.terrain)==="water"?"Water plot":"Land plot",o=t?xr(t.effects,"benefit"):"No engine installed.",a=t?xr(t.effects,"pressure"):"No active pressure.",l=n?xr(n.effects,"benefit"):"",c=n?xr(n.effects,"pressure"):"",d=i.ok?"This plot can accept the selected engine.":i.reason||Mt;ce.selectedTile.innerHTML=`
    <p class="eyebrow">Plot ${jn.x+1}, ${jn.y+1}</p>
    <h2>${me(r)}</h2>
    <div class="tile-tags">
      <span>${me(s)}</span>
      <span>${t?"Active engine":"Buildable ledger space"}</span>
    </div>
    <p>${me(t?t.description:(e==null?void 0:e.terrain)==="water"?"Water can power hydro and pumps.":"Ready for machinery, politics, and regret.")}</p>
    <div class="tile-ledger">
      <div>
        <strong>Built contribution</strong>
        <span>${me(o)}</span>
      </div>
      <div>
        <strong>Built pressure</strong>
        <span>${me(a)}</span>
      </div>
    </div>
    <hr>
    <p><strong>Selected:</strong> ${me(n.name)} (${Lt(Nr(j,n.id))})</p>
    <div class="tile-ledger">
      <div>
        <strong>Would add</strong>
        <span>${me(l)}</span>
      </div>
      <div>
        <strong>Would stress</strong>
        <span>${me(c)}</span>
      </div>
    </div>
    <p class="${i.ok?"good":"bad"}">${me(d)}</p>
    <p>${me(Mt)}</p>
  `}function xr(n={},e="benefit"){const t=Object.entries(n).filter(([,i])=>i!==0).filter(([i,r])=>{const o=bm.has(i)?r>0:r<0;return e==="pressure"?o:!o}).slice(0,5).map(([i,r])=>{const s=Em[i]??Oc(i),o=r>0?"+":"";return`${s} ${o}${r}`});return t.length?t.join(", "):e==="pressure"?"No obvious new pressure.":"No immediate contribution."}function qm(){const n=j.lastIssue;ce.newspaperHeadline.textContent=n.headline,ce.newspaperCopy.textContent=n.summary,ce.issueDate.textContent=Ac(j),ce.eventFeed.innerHTML=j.eventHistory.slice(0,6).map(e=>`<li><strong>${me(e.headline)}</strong><br>${me(e.summary)}</li>`).join("")}function $m(){var o,a,l;const n=j.ending??Or(j),e=Do(n).slice(0,3),t=Fc(n).slice(0,3),i=jm(n,e,t),r=Km(n);ce.endingScreen.classList.remove("hidden"),ce.endingTitle.textContent=n.headline,ce.endingSummary.textContent=`${n.summary} Final score: ${n.total}.`;const s=n.stats;ce.endingMeta.innerHTML=[["Archetype",n.title],["Charter",((o=Mn[j.charterId])==null?void 0:o.name)??"Balanced Charter"],["Population",j.population.toLocaleString("en-US")],["Cash",Lt(j.money)],["Debt",Lt(j.debt)],["Projects",`${((a=j.completedProjects)==null?void 0:a.length)??0}`],["Milestones",`${((l=j.completedMilestones)==null?void 0:l.length)??0}/${xi.length}`],["Access",`${s.roadAccess}%`],["Civic Coverage",`${s.civicCoverage}%`],["Development",`${n.score.development}`]].map(([c,d])=>`<div><span>${me(c)}</span><strong>${me(d)}</strong></div>`).join(""),ce.endingArticle.innerHTML=`
    <section>
      <p class="eyebrow">Front Page Account</p>
      <h2>${me(n.title)}</h2>
      <p>${me(Zm(n,e,t))}</p>
    </section>
    <section class="power-breakdown">
      <p class="eyebrow">What powered your independence?</p>
      <div>${r.map(c=>`<span><strong>${me(c.label)}</strong>${c.value}</span>`).join("")}</div>
    </section>
    <section>
      <p class="eyebrow">Strongest Engines</p>
      <ol>${e.map(c=>`<li><strong>${me(c.label)}</strong><span>${me(c.note)} (${c.value})</span></li>`).join("")}</ol>
    </section>
    <section>
      <p class="eyebrow">Worst Pressures</p>
      <ol>${t.map(c=>`<li><strong>${me(c.label)}</strong><span>${me(c.note)} (${c.value})</span></li>`).join("")}</ol>
    </section>
    <section>
      <p class="eyebrow">Awards</p>
      <div class="award-row">${i.map(c=>`<span>${me(c)}</span>`).join("")}</div>
    </section>
  `,ce.endingScores.innerHTML=Object.entries(n.score).map(([c,d])=>`
      <div class="score-box">
        <span>${me(Oc(c))}</span>
        <strong>${Math.round(d)}</strong>
      </div>
    `).join("")}function Ym(n){var r,s,o;const e=Do(n).slice(0,3).map(a=>a.label).join(", "),t=Fc(n).slice(0,3).map(a=>a.label).join(", ");return["Engines of Independence",`I built ${n.title} in Engines of Independence.`,`Final score: ${n.total}`,`Strongest engines: ${e}`,`Worst pressures: ${t}`,`Ending headline: ${n.headline}`,`Charter: ${((r=Mn[j.charterId])==null?void 0:r.name)??"Balanced Charter"}`,`Population: ${j.population.toLocaleString("en-US")}`,`Cash: ${Lt(j.money)}`,`Debt: ${Lt(j.debt)}`,`Projects: ${((s=j.completedProjects)==null?void 0:s.length)??0}`,`Milestones: ${((o=j.completedMilestones)==null?void 0:o.length)??0}/${xi.length}`,`Money Engine: ${Dn.money.options[j.doctrines.money].label}`,`Electric Doctrine: ${Dn.electric.options[j.doctrines.electric].label}`,`Transport Doctrine: ${Dn.transport.options[j.doctrines.transport].label}`].join(`
`)}function Do(n){const e=n.score,i=n.stats.counts??{},r=Math.round((e.monetaryTrust+e.bankStability+e.tradeConfidence)/3),s=Math.round((e.trust+e.health+e.civicCoverage)/3),o=Math.round((e.resilience+e.access+e.civicCoverage)/3),a=Math.round(Math.min(100,(i.newspaper??0)*26+(i.radioStation??0)*30+e.innovation*.35+e.trust*.25)),l=Math.round((e.trust+e.corruption+e.inflation)/3),c=Math.round(100-e.shadow);return[{label:"Energy",value:e.power,note:"lamps, motors, stations, and grid confidence"},{label:"Freight",value:e.freight,note:"roads, rail, depots, crops, and market reach"},{label:"Finance",value:r,note:"money trust, banks, credit, and trade confidence"},{label:"Civic Trust",value:s,note:"health, legitimacy, care, and public patience"},{label:"Public Works",value:o,note:"access, resilience, pipes, codes, and repairs"},{label:"Press",value:a,note:"newspapers, radio, education, and shared reality"},{label:"Policy",value:l,note:"taxes, regulation, labor, utilities, and money doctrine"},{label:"Shadow Economy",value:c,note:"informal money, saloons, vice, and leakage"}].sort((d,h)=>h.value-d.value)}function Fc(n){const e=n.score,t=n.stats;return[{label:"Inflation",value:100-e.inflation,note:"prices outrunning trust"},{label:"Corruption",value:100-e.corruption,note:"private machinery inside public machinery"},{label:"Shadow Economy",value:100-e.shadow,note:"cash and power outside the official ledger"},{label:"Pollution",value:100-e.pollution,note:"smoke, water, lungs, and industrial residue"},{label:"Debt Burden",value:t.debtBurden,note:"tomorrow funding today"},{label:"Industrial Conflict",value:t.industrialConflict*18,note:"homes and industry fighting over the same street"},{label:"Civic Gap",value:Math.max(0,100-e.civicCoverage),note:"growth without enough care"},{label:"Trust Fragility",value:Math.max(0,100-e.trust),note:"legitimacy thinning under pressure"}].sort((i,r)=>r.value-i.value)}function jm(n,e,t){var r,s;const i=[];return n.total>=75&&i.push("Republic-grade machinery"),(r=e[0])!=null&&r.label&&i.push(`${e[0].label} carried the town`),n.score.pollution>=70&&i.push("Clean enough to brag"),n.stats.debtBurden<=20&&i.push("Respectable debt discipline"),((s=t[0])==null?void 0:s.value)>=65&&i.push(`${t[0].label} nearly owned the front page`),(j.completedMilestones??[]).length>=5&&i.push("Charter goals stacked high"),i.length?i.slice(0,4):["Ledger survived the experiment"]}function Km(n){const e=Do(n);return["Energy","Freight","Finance","Civic Trust","Public Works","Press","Policy","Shadow Economy"].map(t=>e.find(i=>i.label===t)).filter(Boolean)}function Zm(n,e,t){var o,a,l,c;const i=((o=e[0])==null?void 0:o.label)??"civic improvisation",r=((a=e[1])==null?void 0:a.label)??"public patience",s=((l=t[0])==null?void 0:l.label)??"ordinary friction";return`The final edition finds ${((c=Mn[j.charterId])==null?void 0:c.name)??"the town charter"} transformed into ${n.title}. ${i} did the heavy lifting, ${r} kept the machinery from becoming pure spectacle, and ${s.toLowerCase()} supplied the argument no council could fully settle. The question left on the pressroom floor is simple: what powered your independence, and what did it demand in return?`}function vs(){ce.endingScreen.classList.add("hidden")}function Dt(n,e=""){if(!n)return;const t=document.createElement("div");t.className=`toast ${e}`.trim(),t.textContent=n,ce.toastLayer.appendChild(t),requestAnimationFrame(()=>t.classList.add("visible")),window.setTimeout(()=>{t.classList.remove("visible"),window.setTimeout(()=>t.remove(),220)},e==="bad"?3600:2600)}function Oc(n){return n.replace(/([A-Z])/g," $1").replace(/[-_]/g," ")}function me(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
