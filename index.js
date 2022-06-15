/*
 * @Author: SUN
 * @Date: 2022-06-15 08:47:46
 * @LastEditors: SUN
 * @LastEditTime: 2022-06-15 10:24:18
 * @FilePath: \package\index.js
 */
/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world'

exports.stripPrivateProperties = (arr1, arr2) => {
  for (const item1 of arr1) {
    for (const item2 of arr2) {
      delete item2[item1]
    }
  }
  return arr2
}
exports.excludeByProperty = (str, arr) => {
  return arr.filter(item => !item.hasOwnProperty(str))
}
exports.sumDeep = (arr) => {
  for (const item of arr) {
    for (const key in item) {
      item[key] = item[key].reduce((total, cur) => total + cur.val, 0)
    }
  }
  return arr
}
exports.applyStatusColor = (obj, arr) => {
  for (const key in obj) {
    for (let i = 0; i < arr.length; i++) {
      obj[key].includes(arr[i].status) ? arr[i].color = key : null
    }
  }
  arr = arr.filter(item => item.color)
  return arr
}
exports.createGreeting = (greet, greeting) => {
  return (name) => {
    return greet(greeting, name)
  }
}
exports.setDefaults = (obj1) => {
  return (obj2) => {
    for (const key in obj1) {
      if (obj2[key] === undefined) obj2 = { ...obj1, ...obj2 }
    }
    return obj2
  }
}
exports.fetchUserByNameAndUsersCompany = (name, services) => {
  const res = {}
  Promise.all([services.fetchStatus, services.fetchUsers])
    .then(result => {
      res.status = result[0]
      res.user = result[1].find(item => item.name === name)
      return services.fetchCompanyById(res.user.companyId)
    })
    .then(c => res.company = c)
    .catch(err => console.log(err))
  return res
}
