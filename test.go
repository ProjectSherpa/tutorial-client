package main

import (
	"log"
	"net/http"
)

//Serving www static directory
//for performance reasons, using go instead of express
// See Github Repo for clarification
func main() {
	fs := http.FileServer(http.Dir("www"))
	http.Handle("/", fs)

	log.Println("Listening...")
	http.ListenAndServe(":3000", nil)
}
