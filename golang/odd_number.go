package main

func findOddNumber(numbers []int) int {
	counts := make(map[int]int)
	for _, num := range numbers {
		counts[num]++
	}

	for num, count := range counts {
		if count%2 != 0 {
			return num
		}
	}

	return 0
}
