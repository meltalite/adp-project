const commodityPlastic = [
  {
    name: 'HIPS',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/hips_tumblr.jpg`,
        altText: 'hips_tumblr'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/hips_plastic.jpg`,
        altText: 'hips_plastic'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/hips_toilet.jpg`,
        altText: 'hips_toilet'
      },
    ]
  },
  {
    name: 'GPPS',
    pictures: [
    ]
  },
  { name: 'EPS' },
  { name: 'HPP' },
  { name: 'BCPP' },
  { name: 'HDPE' },
  { name: 'LDPE' },
  { name: 'LLDPE' },
  { name: 'PVC' },
  { name: 'PET' },
  { name: 'EVA' },
]

const engineeringPlastic = [
  {
    name: 'Lipsum',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/invalid.jpg`,
        altText: 'hips_tumblr'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/invalid.jpg`,
        altText: 'hips_plastic'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/invalid.jpg`,
        altText: 'hips_toilet'
      },
    ]
  },
]

const commodityList = {
  "Commodity Plastic": commodityPlastic,
  "Engineering Plastic": engineeringPlastic,
  "Super Engineering Plastic": engineeringPlastic,
  "Coating": engineeringPlastic,
  "Additives": engineeringPlastic,
} 

export default commodityList;