package main

import "fmt"

func main() {
	text := "abc"
	result := manipulate(text)
	fmt.Println("[1] Manipulate Result : ", result)

	numbers := []int{0, 1, 0, 0, 1}
	oddNumber := findOddNumber(numbers)
	fmt.Println("[2] Odd Number Result : ", oddNumber)

	texts := []string{";D", ":-(", ":-)", ";~)"}
	smileyCount := countSmilyFace(texts)
	fmt.Println("[3] Smiley faces : ", smileyCount)
}
