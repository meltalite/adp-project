const logisticServicePictures = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/services/ls_1.jpg`,
    altText: 'ls_1'
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/services/ls_2.jpg`,
    altText: 'ls_2'
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/services/ls_3.jpg`,
    altText: 'ls_3'
  },
]

const solutionProvider = {
  name: 'Solution Provider',
  pictures: logisticServicePictures
}

const logisticService = {
  name: 'Logistic Service',
  pictures: logisticServicePictures
}

const localRepresentative = {
  name: 'Distributor & Local Representative',
  pictures: logisticServicePictures
}

const technicalService = {
  name: 'Technical Service',
  pictures: logisticServicePictures
}

const activityList = {
  "Solution Provider": solutionProvider,
  "Logistic Service": logisticService,
  "Distributor & Local Representative": localRepresentative,
  "Technical Service": technicalService,
} 

export default activityList;