package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func Index(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("Hello world !"))
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}
	r := mux.NewRouter()
	r.HandleFunc("/", Index)

	log.Printf("Starting afrostream-pf on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}
