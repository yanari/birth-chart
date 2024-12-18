import { defineStore } from 'pinia'

export const useMetaStore = defineStore('meta', {
    state: () => {
        return {
            title: 'Find out the elements that dominate your chart!',
            description: 'by github.com/yanari',
            twitterCard: 'summary',
            image: null
        }
    },
    actions: {
        setTitle(title: string) {
            this.title = title;
            this.description = 'Find out yours too! by github.com/yanari';
            this.twitterCard = 'summary_large_image';
        },
        setImage(image: any) {
            this.image = image;
        }
    },
})