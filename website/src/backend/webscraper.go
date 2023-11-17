package main

import (
	"log"
	"os"
	"io"
	"crypto/md5"
	"fmt"
)

func file_hash(filename string) {
	f, err := os.Open(filename)
	if err != nil {
	  log.Fatal(err)
	}
	defer f.Close()
	 
	h := md5.New()
	if _, err := io.Copy(h, f); err != nil {
	  log.Fatal(err)
	}
	 
	fmt.Printf("%x\n", h.Sum(nil))
}



