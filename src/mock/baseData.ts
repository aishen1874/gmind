import { v4 as uuidv4 } from 'uuid'

export default {
  id: uuidv4(),
  name: '分析图谱',
  children: [
    {
      id: uuidv4(),
      name: '行业管理',
      children: [
        {
          id: uuidv4(),
          name: '金融业',
          children: [
            {
              id: uuidv4(),
              name: '资本市场服务'
            },
            {
              id: uuidv4(),
              name: '货币金融服务'
            },
            {
              id: uuidv4(),
              name: '资本市场服务'
            }
          ]
        },
        {
          id: uuidv4(),
          name: '批发和零售业'
        },
        {
          id: uuidv4(),
          name: '制造业'
        },
        {
          id: uuidv4(),
          name: '建筑业'
        },
        {
          id: uuidv4(),
          name: '房地产业'
        }
      ]
    },
    {
      id: uuidv4(),
      name: '事项管理',
      children: [
        {
          id: uuidv4(),
          name: '生产经营事项'
        },
        {
          id: uuidv4(),
          name: '跨境事项'
        },
        {
          id: uuidv4(),
          name: '投资事项'
        }
      ]
    }
  ]
}
