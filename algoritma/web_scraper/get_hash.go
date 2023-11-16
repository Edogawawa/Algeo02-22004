package main

import (
    "fmt"
    "crypto/md5"
	"log"
	"io"
	"os"
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

// func main(){
// 	file1 := "scrapped_images/dosen_itb_masuk-100_(1).jpg"
// 	file2 := "scrapped_images/dosen_masuk_itb_testing.jpg"

// 	file_hash(file1)
// 	file_hash(file2)
// }