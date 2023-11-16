// package main

// import (
// 	"fmt"
// 	"log"
// 	"net/http"
// 	"path/filepath"

// 	"github.com/gin-gonic/gin"
// )

// func main() {
// 	router := gin.Default()

// 	// Set a lower memory limit for multipart forms (default is 32 MiB)
// 	router.MaxMultipartMemory = 8 << 20 // 8 MiB

// 	// Specify the destination folder to save the uploaded files
// 	dst := "uploadDataset"

// 	var uploadedFilePaths []string

// 	router.POST("/uploadDataset", func(c *gin.Context) {
// 		// Multipart form
// 		form, err := c.MultipartForm()
// 		if err != nil {
// 			c.String(http.StatusBadRequest, fmt.Sprintf("Error: %s", err.Error()))
// 			return
// 		}

// 		files := form.File["files"]

// 		for _, file := range files {
// 			log.Println(file.Filename)

// 			// Create the destination path for the file
// 			destPath := filepath.Join(dst, file.Filename)

// 			// Upload the file to the specified destination
// 			if err := c.SaveUploadedFile(file, destPath); err != nil {
// 				c.String(http.StatusInternalServerError, fmt.Sprintf("Error saving file: %s", err.Error()))
// 				return
// 			}

// 			// Save the uploaded file path
// 			uploadedFilePaths = append(uploadedFilePaths, destPath)
// 		}

// 		// Call processPictures with the paths of all uploaded images
// 		vektor2 := processPictures(uploadedFilePaths)
// 		fmt.Printf("Vektor: %f\n", vektor2)

// 		c.String(http.StatusOK, fmt.Sprintf("%d files uploaded!", len(files)))
// 	})

// 	// Run the server on port 8080
// 	router.Run(":8080")
// }

// // processPictures takes a slice of file paths and processes each image
// func processPictures(filePaths []string) float64 {
// 	// Your logic to process the images and calculate the vektor
// 	// For simplicity, let's assume you have a function named processPicture
// 	// that takes a file path and returns a float64
// 	// You may need to adjust this based on your actual implementation
// 	var totalVektor float64
// 	for _, filePath := range filePaths {
// 		vektor := processPict(filePath)
// 		// Accumulate the vektors
// 		totalVektor += vektor
// 	}
// 	// Calculate the average or use any other logic based on your requirement
// 	averageVektor := totalVektor / float64(len(filePaths))
// 	return averageVektor
// }

// // processPicture takes a single file path and processes the image
// func processPict(filePath string) float64 {
// 	// Your logic to process a single image and return a float64 vektor
// 	// Placeholder implementation, replace with your actual logic
// 	return float64(len(filePath))
// }

package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	// "os"
	"encoding/json"
	"path/filepath"
	"strings"

	// "gonum.org/v1/gonum/mat"

	"github.com/gin-gonic/gin"
	// "gonum.org/v1/gonum/mat"
)

// type Vevek struct {
// 	// id string
// 	// vektor [4][4]*mat.VecDense
// 	vektor string
// }

type Employee struct {
	Vec string
}

func main() {
	router := gin.Default()

	// Set a lower memory limit for multipart forms (default is 32 MiB)
	router.MaxMultipartMemory = 8 << 20 // 8 MiB

	// Specify the destination folder to save the uploaded files
	dst := "uploadDataset"

	router.POST("/uploadDataset", func(c *gin.Context) {
		// Multipart form
		form, err := c.MultipartForm()
		if err != nil {
			c.String(http.StatusBadRequest, fmt.Sprintf("Error: %s", err.Error()))
			return 
		}

		files := form.File["files"]

		for _, file := range files {
			log.Println(file.Filename)
			replaced_string :=  strings.Replace(file.Filename, " ", "-", -1)

			// Create the destination path for the file
			destPath := filepath.Join(dst, replaced_string)
			// fmt.Printf("destPath: %s\n", destPath)
			bakulGorengan := "./uploadDataset/" + replaced_string
			fmt.Printf("bakulGorengan: %s\n", bakulGorengan)

			// Upload the file to the specified destination
			if err := c.SaveUploadedFile(file, destPath); err != nil {
				c.String(http.StatusInternalServerError, fmt.Sprintf("Error saving file: %s", err.Error()))
				return
			}
			vektor2 := processPicture(bakulGorengan)      // ./Folder/namfile
			fmt.Printf("Vektor: %f\n", vektor2)

			// jinguk := "peh"
			// data := Employee{
			// 	Vec: bakulGorengan,
			// }


			a := Employee{Vec:bakulGorengan}
			// o := Employee{Vec:"Orange"}
		  
			var fs []Employee
			fs = append(fs, a)
			// fs = append(fs, o)
			log.Println(fs)
		  
			// j, _ := json.Marshal(fs)
			// log.Println(string(j))

			// j, _ = json.MarshalIndent(fs, "", "  ")
			// log.Println(string(j))

			file, _ := json.MarshalIndent(fs, "", " ")
			_ = ioutil.WriteFile("test.json", file, 0644)
			}

			// file, _ := json.MarshalIndent(data, "", " ")
			// _ = ioutil.WriteFile("test.json", file, 0644)
			// }

		// data := Vevek{
		// 	vektor : "aowkowak",
		// }

		// data := &Vevek{
		// 	vektor:   "awokawok",
		// }
		// data1, _ := json.Marshal(data)
		// fmt.Println(string(data1))

		c.String(http.StatusOK, fmt.Sprintf("%d files uploaded!", len(files)))
		
	})

	// Run the server on port 8080
	router.Run(":8080")
}