package main

import (
	"strings"
)

func factorial(number int) int {
	answer := 1
	if number >= 2 {
		for i := 2; i <= number; i++ {
			answer = answer * i
		}
	}
	return answer
}

func manipulate(text string) []string {
	result := make([]string, 0)
	splitChar := strings.Split(text, "")

	for index := 0; index < len(splitChar); index++ {
		char := splitChar[index]
		otherChar := make([]string, 0)
		for i, ch := range splitChar {
			if i != index {
				otherChar = append(otherChar, ch)
			}
		}

		for loop := 0; loop < factorial(len(otherChar)); loop++ {
			if loop > 0 {
				firstElement := otherChar[0]
				otherChar = append(otherChar[1:], firstElement)
			}
			combine := char + strings.Join(otherChar, "")
			if !contains(result, combine) {
				result = append(result, combine)
			}
		}
	}

	return result
}

func contains(arr []string, str string) bool {
	for _, a := range arr {
		if a == str {
			return true
		}
	}
	return false
}
