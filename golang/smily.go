package main

import "regexp"

func countSmilyFace(texts []string) int {
	regex := "[:;][-~]?[)D]"
	re := regexp.MustCompile(regex)

	count := 0
	for _, text := range texts {
		if re.MatchString(text) {
			count++
		}
	}

	return count
}
