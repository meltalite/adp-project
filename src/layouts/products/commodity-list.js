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
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/gpps_tray.jpg`,
        altText: 'gpps_tray'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/gpps_container.jpg`,
        altText: 'gpps_container'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/gpps_case.jpg`,
        altText: 'gpps_case'
      },
    ]
  },
  {
    name: 'EPS',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/eps_board.jpg`,
        altText: 'eps_board'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/eps_container.jpg`,
        altText: 'eps_container'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/eps_stack.jpg`,
        altText: 'eps_stack'
      },
    ]
  },
  {
    name: 'HPP',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/hpp_string.jpg`,
        altText: 'hpp_string'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/hpp_roll.jpg`,
        altText: 'hpp_roll'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/hpp_valve.jpg`,
        altText: 'hpp_valve'
      },
    ]
  },
  {
    name: 'BCPP',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/bcpp_wheel.jpg`,
        altText: 'bcpp_wheel'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/bcpp_container.jpg`,
        altText: 'bcpp_container'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/bcpp_pad.jpg`,
        altText: 'bcpp_pad'
      },
    ]
  },
  {
    name: 'HDPE',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/hdpe_chair.jpg`,
        altText: 'hdpe_chair'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/hdpe_bottle.jpg`,
        altText: 'hdpe_bottle'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/hdpe_gallon.jpg`,
        altText: 'hdpe_gallon'
      },
    ]
  },
  {
    name: 'LDPE',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/ldpe_slide.jpg`,
        altText: 'ldpe_slide'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/ldpe_container.jpg`,
        altText: 'ldpe_container'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/ldpe_wrapper.jpg`,
        altText: 'ldpe_wrapper'
      },
    ]
  },
  {
    name: 'LLDPE',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/lldpe_bag.jpg`,
        altText: 'lldpe_bag'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/lldpe_container.jpg`,
        altText: 'lldpe_container'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/lldpe_wrapper.jpg`,
        altText: 'lldpe_wrapper'
      },
    ]
  },
  {
    name: 'PVC',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/pvc_pipe.jpg`,
        altText: 'pvc_pipe'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/pvc_floor.jpg`,
        altText: 'pvc_floor'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/pvc_window.jpg`,
        altText: 'pvc_window'
      },
    ]
  },
  {
    name: 'PET',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/pet_bottle.jpg`,
        altText: 'pet_bottle'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/pet_rope.jpg`,
        altText: 'pet_rope'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/pet_utensil.jpg`,
        altText: 'pet_utensil'
      },
    ]
  },
  {
    name: 'EVA',
    pictures: [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/eva_shoe.jpg`,
        altText: 'eva_shoe'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/eva_saddle.jpg`,
        altText: 'eva_saddle'
      },
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/eva_line.jpg`,
        altText: 'eva_line'
      },
    ]
 },
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