import { getElementNames } from "~/utils/elements";

export default defineEventHandler(async (event) => {
    const { els }: { els: string } = getQuery(event)

    console.log('els:', els)
    
    if (!els || els === null || !(els).includes('wfea,')) {
        return 'Find out the elements that dominate your chart!';
    }
    const { text, plural } = getElementNames(els);

    return {
        ogTitle: `The element${plural? 's' :''} that dominate my birth chart ${plural? 'are' :'is'} ${text}.`,
        ogDescription: 'Find out yours too! by github.com/yanari',
        ogImage: 'https://www.76psychics.com/Images/Blog/d83023f4-18ef-4f21-998e-89047bdd0a68.jpg',
        ogType: 'website',
        ogUrl: 'https://birth-chart-elements.netlify.app/',
        twitterCard: 'summary_large_image'
    }
})
