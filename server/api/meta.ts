import { getElementNames } from "~/utils/elements";

export default defineEventHandler(async (event) => {
    const { els }: { els: string } = getQuery(event)

    console.log('els:', els)
    let title = '';
    let description = '';
    
    let text, plural;
    
    if (!els || els === null || !(els).includes('wfea,')) {
        title = 'Find out the dominant elements on your birth chart!'
        description = 'by github.com/yanari'
    } else {
        ({ text, plural } = getElementNames(els));
        title = `The element${plural? 's' :''} that dominate my birth chart ${plural? 'are' :'is'} ${text}.`
        description = 'Find out yours too! by github.com/yanari';
    }

    return {
        ogTitle: title,
        twitterTitle: title,
        ogDescription: description,
        twitterDescription: description,
        // ogImage: 'https://www.76psychics.com/Images/Blog/d83023f4-18ef-4f21-998e-89047bdd0a68.jpg',
        // twitterImage: 'https://www.76psychics.com/Images/Blog/d83023f4-18ef-4f21-998e-89047bdd0a68.jpg',
        ogType: 'website',
        ogUrl: 'https://calculate-astrology.netlify.app',
        twitterCard: 'summary_large_image'
    }
})
