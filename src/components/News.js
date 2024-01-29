import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Jordan Mendoza",
            "title": "WWE Royal Rumble 2024 live results: Match winners, highlights, more - USA TODAY",
            "description": "The 2024 Royal Rumble is underway, with a championship opportunity at WrestleMania on the line. Follow the action.",
            "url": "https://www.usatoday.com/story/sports/2024/01/27/wwe-royal-rumble-2024-live-results-winners-highlights/72356040007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/25/USAT/72356348007-usatsi-17587430.jpg?crop=5615,3159,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2024-01-28T01:00:00Z",
            "content": "Who will be the star that main-events WrestleMania?\r\nThe road to WrestleMania is officially underway with the 2024 Royal Rumble taking place Saturday. WWEs first premium live event of the year is hig… [+13495 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Boeing 737 Max 9 flights resume for first time since grounding - NBC News",
            "description": "Boeing 737 Max 9 flights have resumed weeks after a door plug on an Alaska Airlines flight blew out over Portland. Alaska Airlines showed what it says are co...",
            "url": "https://www.youtube.com/watch?v=9nb7jdnZ5mo",
            "urlToImage": "https://i.ytimg.com/vi/9nb7jdnZ5mo/maxresdefault.jpg",
            "publishedAt": "2024-01-28T00:30:06Z",
            "content": null
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "TERRY CHEA Associated Press",
            "title": "Avian flu is devastating farms in California's 'Egg Basket' as outbreaks roil poultry industry - ABC News",
            "description": "A year after the bird flu led to record egg prices and widespread shortages, the disease known as highly pathogenic avian influenza is wreaking havoc on California poultry farms",
            "url": "https://abcnews.go.com/US/wireStory/avian-flu-devastating-farms-californias-egg-basket-outbreaks-106729653",
            "urlToImage": "https://i.abcnewsfe.com/a/c954fd7c-ad2d-4ebb-b39b-463e66378c81/wirestory_976f0f82843bf716dbad64f459b4b8be_16x9.jpg?w=1600",
            "publishedAt": "2024-01-28T00:17:05Z",
            "content": "PETALUMA, Calif. -- Last month, Mike Weber got the news every poultry farmer fears: His chickens tested positive for avian flu.\r\nFollowing government rules, Weber's company, Sunrise Farms, had to sla… [+5479 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Matthew Sedacca",
            "title": "Vince McMahon sex abuse 'in its own class,' accusers lawyer claims - New York Post ",
            "description": "Ann Callis, an attorney for Janel Grant who previously was a a criminal felony judge, said what her client endured at WWE founder Vince McMahon’s hands is in “its own class.”",
            "url": "https://nypost.com/2024/01/27/news/vince-mcmahon-sex-abuse-in-its-own-class-accusers-lawyer-claims/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/01/75566901.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-01-27T23:49:00Z",
            "content": "The lawyer who represents a former WWE employee who claims she was sexually abused and trafficked by Vince McMahon said the “depravity” her client endured over the years is “in its own class.” \r\nAnn … [+2422 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Priscilla Alvarez",
            "title": "Biden seizes on tougher border measures as he tries to fend off Trump attacks - CNN",
            "description": "President Joe Biden is embracing tougher border measures, including shutting down the US-Mexico border, marking a stark shift from his early days in office as he tries to fend off former President Donald Trump’s attacks on immigration policy ahead of the elec…",
            "url": "https://www.cnn.com/2024/01/27/politics/biden-border-shut-down-us-mexico-immigration/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240127081236-us-mexico-border-122923.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-01-27T23:29:00Z",
            "content": "President Joe Biden is embracing tougher border measures, including shutting down the US-Mexico border, marking a stark shift from his early days in office as he tries to fend off former President Do… [+6563 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "This cruise ship can carry nearly 10,000 people. Here’s more of what sets Icon of the Seas apart - CNN",
            "description": "As Icon of the Seas sets sail on her maiden voyage, here’s a look at the features that set this mammoth ship apart.",
            "url": "https://www.cnn.com/travel/icon-of-the-seas-largest-cruise-ship/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/02-icon-of-the-seas-photosv2.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-01-27T23:09:00Z",
            "content": "There is nothing subtle about the worlds largest cruise ship.\r\nRoyal Caribbeans new, nearly 1,200-foot-long and 250,800 gross ton Icon of the Seas - which set sail from the Port of Miami on its maide… [+10850 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Eva Rothenberg",
            "title": "Searches for Taylor Swift on X come up empty after explicit AI pictures go viral - CNN",
            "description": "Searching for Taylor Swift on X, formerly known as Twitter, now yields an error message.",
            "url": "https://www.cnn.com/2024/01/27/business/taylor-swift-x-search/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240127165802-taylor-swift-010724.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-01-27T22:43:00Z",
            "content": "Searching for Taylor Swift on X, formerly known as Twitter, showed an error message Saturday after pornographic, AI-generated images of the singer were circulated across social media last week.\r\nXs s… [+2282 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Houthis target U.S. destroyer in latest round of missile attacks; strike British merchant ship - CBS News",
            "description": "The attack on the destroyer USS Carney marked a further escalation in the biggest confrontation at sea the U.S. Navy has seen in the Middle East in decades.",
            "url": "https://www.cbsnews.com/news/houthis-target-u-s-destroyer-carney-british-merchant-ship-missile-attacks-red-sea-gulf-of-aden/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/01/27/2edea6dd-b724-4c2a-b07a-fd9a20db7c31/thumbnail/1200x630/b283d3c13ee60ff8c94876ae58b6f952/gettyimages-1960705603.jpg?v=9bdba4fec5b17ee7e8ba9ef8c71cf431",
            "publishedAt": "2024-01-27T22:36:00Z",
            "content": "Yemen's Iranian-backed Houthi rebels launched a missile Friday at a U.S. warship patrolling the Gulf of Aden, forcing it to shoot down the projectile, and also struck a British vessel as their aggres… [+5144 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Mary Kekatos, Youri Benadjaoud",
            "title": "CDC warns health care workers to be on alert for measles amid rising number of cases - ABC News",
            "description": "There have been 23 confirmed cases of measles since December 2023.",
            "url": "https://abcnews.go.com/Health/cdc-warns-health-care-workers-alert-measles-amid/story?id=106737650",
            "urlToImage": "https://i.abcnewsfe.com/a/225c45a3-ccbc-41c8-9dd6-2590a2bcc826/measles-vaccine-02-gty-jef-240117_1705518358237_hpMain_2_16x9.jpg?w=1600",
            "publishedAt": "2024-01-27T22:03:48Z",
            "content": "The Centers for Disease Control and Prevention (CDC) is warning clinicians to remain on alert for measles cases due to a growing number of infections.\r\nBetween Dec. 1, 2023, and Jan. 23, 2024, there … [+2663 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Lauren Irwin",
            "title": "Trump can delay paying full E. Jean Carroll damages until after appeal: report - The Hill",
            "description": "Former President Trump can delay paying E. Jean Carroll the $83.3 million a jury decided he owes her until after he exhausts all appeal options he has vowed to seek, The New York Times reports. On Friday, a federal jury in New York ordered Trump to pay Carrol…",
            "url": "https://thehill.com/regulation/court-battles/4433642-trump-can-delay-paying-full-e-jean-carroll-damages-until-after-appeal-report/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/01/65a0a20615ff48.29029668.jpeg?w=1280",
            "publishedAt": "2024-01-27T22:01:00Z",
            "content": "Skip to content\r\nFormer President Trump can delay paying E. Jean Carroll the $83.3 million a jury decided he owes her until after he exhausts all appeal options he has vowed to seek, The New York Tim… [+2014 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Palestinians slam suspension of UNRWA funding by some Western nations - Al Jazeera English",
            "description": "Australia, UK, US and others halt support after Israel accused UNRWA staff of involvement in Hamas’s October 7 attacks.",
            "url": "https://www.aljazeera.com/news/2024/1/27/palestinians-slam-suspension-of-unrwa-funding-by-some-western-nations",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/344E96D-highres-1701929774.jpg?resize=1920%2C1440",
            "publishedAt": "2024-01-27T21:59:27Z",
            "content": "Top Palestinian officials and Hamas have criticised the decision by some Western countries to suspend funding to the United Nations relief agency for Palestinians and called for an immediate reversal… [+6979 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "NAJIB JOBAIN, WAFAA SHURAFA",
            "title": "Netanyahu is defiant after UN court ruling as deaths in Gaza offensive continue - The Associated Press",
            "description": "The head of the main U.N. aid agency in the war-battered Gaza Strip has warned that its work is “collapsing” after nine donor countries decided to cut funding. The United States and other countries made the decision after allegations surfaced that several age…",
            "url": "https://apnews.com/article/israel-hamas-war-news-01-27-2024-8883a8bc0aa3552e880fb9e9b7e140b4",
            "urlToImage": "https://dims.apnews.com/dims4/default/0f384ef/2147483647/strip/true/crop/7801x4388+0+406/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff1%2F35%2Fbb95af40c6b2e058f41b18ab9b2e%2Ffb654ec7df394226b8949008f1cf21b3",
            "publishedAt": "2024-01-27T21:28:00Z",
            "content": "RAFAH, Gaza Strip (AP) The head of the main U.N. aid agency in the war-battered Gaza Strip warned late Saturday that its work is collapsing after nine countries decided to cut funding over allegation… [+7196 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Matthew Boesler, Craig Stirling",
            "title": "Fed Rate Decision Could Be the Prelude to a March Cut - Bloomberg",
            "description": "Federal Reserve policymakers may finally be right on the verge of cutting interest rates.",
            "url": "https://www.bloomberg.com/news/articles/2024-01-27/fed-rate-cut-this-week-s-decision-could-be-the-prelude-to-a-march-move",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iT4Dcy6Yb6GI/v1/1200x800.jpg",
            "publishedAt": "2024-01-27T21:13:43Z",
            "content": "Federal Reserve policymakers may finally be right on the verge of cutting interest rates.\r\nGoing into this weeks two-day policy meeting, which wraps Wednesday afternoon in Washington, investors are a… [+133 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "2024 NFL championship round bold predictions: Patrick Mahomes, Brock Purdy struggle, with different results - CBS Sports",
            "description": "Here are five bold predictions for conference championship Sunday",
            "url": "https://www.cbssports.com/nfl/news/2024-nfl-championship-round-bold-predictions-patrick-mahomes-brock-purdy-struggle-with-different-results/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/01/27/7c58f704-e0ad-4dd7-9617-19195082f7a0/thumbnail/1200x675/fb29bb1a8ae9399e590a6648015bc2a5/ravens-sack-mahomes-g.jpg",
            "publishedAt": "2024-01-27T20:55:00Z",
            "content": "The NFL postseason is down to the final four teams, and while the remaining field includes three that were expected to be here -- the San Francisco 49ers, Baltimore Ravens and Kansas City Chiefs -- t… [+7582 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Daily News"
            },
            "author": "Ellen Moynihan",
            "title": "NYC dancer Orla Baxendale, who died after eating Stew Leonard’s cookie with peanuts, remembered as ‘radiant’ performer - New York Daily News",
            "description": "Órla Baxendale, the UK-born dancer who died from a peanut allergy after her family said she ate a mislabeled cookie from Stew Leonard’s, was remembered by friends and the prestigious dance sc…",
            "url": "http://www.nydailynews.com/2024/01/27/nyc-dancer-orla-baxendale-died-after-eating-stew-leonards-cookie-with-peanuts-remembered-as-talented-driven-performer/",
            "urlToImage": "https://www.nydailynews.com/wp-content/uploads/2024/01/Orla-Baxendale-2.jpg?w=1024&h=731",
            "publishedAt": "2024-01-27T20:36:17Z",
            "content": "Orla Baxendale, the U.K.-born dancer who died from a peanut allergy after her family said she ate a mislabeled cookie from Stew Leonard’s, was remembered by friends and the prestigious dance schools … [+3994 chars]"
        }

    ]
    constructor() {
        super();
        console.log("This is a constructor")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className='container my-4'>
                <h2>News Junkie top headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                      return  <div className="col-md-3" key={element.url}>
                            <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl = {element.url}/>

                        </div>
                    })}
                </div>
            </div>
        )
    }
}
