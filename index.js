'use strict'

/**
* Question 1:
* Given two strings s and t , write a function to determine if t is an anagram of s.
* Example 1:
* Input: s = "anagram", t = "nagaram"
* Output: true
* Example 2:
* Input: s = "rat", t = "car"
* Output: false
* Note: You may assume the string contains only lowercase alphabets.
*/
function question1(s, t) {
  if (s.toLowerCase().length != t.toLowerCase().length) {
    return false
  }

  // make a dictionary to keep track the count of each character occurence.
  let dict = {}

  // we count every occurence of characters in the string and add it in our dictionary
  // keeping track of its count.
  for (let i = 0; i < s.length; i++) {
    dict[s[i]] = dict[s[i]] ? dict[s[i]] + 1 : 1
    dict[t[i]] = dict[t[i]] ? dict[t[i]] - 1 : -1
  }

  for (let d in dict) {
    if (dict[d] !== 0) {
      return false
    }
  }
  return true
}

/**
* Question 2:
* Problem Statement : Maximum possible value by inserting 5
* Given N = 276, function should return 5276
* Given N = -999, function should return -5999
* Given N = 0, function should return 50
* Given N = 860, function should return 8650
*/
function question2(N) {
  const isNegative = N < 0
  const num = Math.abs(N).toString()
  const permutations = []

  // create a possible permutation
  // of numbers if '5' is added to the substring.
  // Push it to our permutations container.
  for (let i = 0; i < num.length; i++) {
    const permutation = Number(num.substr(0, i) + '5' +num.substr(i))
    permutations.push(permutation)
  }

  return isNegative ?
    Math.min(...permutations) * -1 :
    Math.max(...permutations)
}

/** Driver Code */
function run() {
  const s = "rat"
  const t = "car"
  console.log(question1(s, t))

  const N = -999
  console.log(question2(N))
}


run()
