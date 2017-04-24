// const my_user_id = 'UF61295B4F'
const my_api_key = 'sh65e8ydwchpukek'
const api = 'https://api.seniverse.com/v3/weather/now.json?'
// const cities = ['beijing', 'shanghai', 'guangzhou', 'shenzhen', 'zhuhai']

export default (city) => {
  return `${api}key=${my_api_key}&location=${city}&language=zh-Hans&unit=c`
} 

