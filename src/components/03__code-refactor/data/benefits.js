import {
  ImageBenefit1,
  ImageBenefit2,
  ImageBenefit3 //
} from '../images/index.js'

const benefits = [
  {
    id: 'benefit-lead',
    imgSrc: ImageBenefit1,
    imgAlt: 'a icon showing money coming from a good idea',
    heading: 'Lead Generation',
    paragraph: 'Inbound strategies for lead generation require less work for your business, bringing customers directly to your website.'
  },
  {
    id: 'benefit-brand',
    imgSrc: ImageBenefit2,
    imgAlt: 'a lightbulb icon showing people becoming aware of a good idea',
    heading: 'Brand Awareness',
    paragraph: 'Users find your business through paid and organic searches, increasing the search ranking and visibility for your business.'
  },
  {
    id: 'benefit-cost',
    imgSrc: ImageBenefit3,
    imgAlt: 'a cog icon representing different costs being managed together',
    heading: 'Cost Management',
    paragraph: 'As the search ranking for your business increases, your advertising costs decrease, and you no longer need to advertise your page.'
  }
]
export default benefits
