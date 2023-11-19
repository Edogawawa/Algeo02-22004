package main

import (
	"fmt"
	// "io/ioutil"
	"log"
	// "os"
	"path/filepath"
	// "sync"
)

func main(){
	// versi 1
	// files, err := ioutil.ReadDir("../images/*.png")
	files, err := filepath.Glob("../images/*.png")
	if err != nil {
        log.Fatal(err)
    }

	for _, f := range files {
        // fmt.Println(f.Name())
        fmt.Println(f)
    }
}