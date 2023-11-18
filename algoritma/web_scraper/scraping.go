package main

import (
    "fmt"
    "io"
    "net/http"
    "os"
    "path/filepath"
    "time"
    "strings"
    "github.com/gocolly/colly"
)

func DownloadImage(url, outputDir string) error {
    // if outputDir not exist then create
    if _, err := os.Stat(outputDir); os.IsNotExist(err) {
		err := os.MkdirAll(outputDir, 0755)
		if err != nil {
			return err
		}
	}

	// Make an HTTP GET request to the image URL
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	// Check if the request was successful (status code 200)
	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("Failed to download image. Status code: %d", resp.StatusCode)
	}

	// Get the file name from the URL
	fileName := filepath.Base(url)

	// Create the full path for the output file
	outputPath := filepath.Join(outputDir, fileName)

	// Create a new file to save the image
	file, err := os.Create(outputPath)
	if err != nil {
		return err
	}
	defer file.Close()

	// Copy the response body (image data) to the local file
	_, err = io.Copy(file, resp.Body)
	if err != nil {
		return err
	}

	return nil
}

func scraping_image() {

    start := time.Now()

    c := colly.NewCollector()

	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL)
	 })

    // Find and print all links
    c.OnHTML("img", func(e *colly.HTMLElement) {
		// fmt.Println(e)
        links := e.Attr("src")
        fmt.Println(links)

        DownloadImage(links, "./scrapped_images")

        folder := "./scrapped_images/"
        file := strings.Split(links, "/")
        filename := file[len(file)-1]

        filename = folder + filename
        fmt.Println(filename)
        file_hash(filename)
    })

    c.Visit("https://www.itb.ac.id/")

    elapsed := time.Since(start)
    fmt.Println("Execution time :", elapsed)
}