import {jsPDF} from 'jspdf'  
import html2canvas from 'html2canvas'


export const downloadToPDF = (contentRef) =>{
    try {
        // const newPDF = async () => {
        // const input = contentRef.current
        // if(!input) throw new Error('Invalid content reference')
        
        // const originalStyle = contentRef.current.getAttribute('style')
        // contentRef.current.style.height = 'auto'
        // contentRef.current.style.overflow = 'visible'

        // const scale = 2

        // const canvas = await html2canvas(input, {
        // scrollY: -window.scrollY,
        // scale: scale
        // })

        // contentRef.current.setAttribute('style', originalStyle)
        // const imgPdf = canvas.toDataURL('image/png')
        // const documentPDF = new jsPDF('p', 'mm', 'a4')

        // const margin = {
        //     top: 10,
        //     left: 10,
        //     right: 10,
        //     bottom: 10,
        // }
        
        //     const pageWidth = documentPDF.internal.pageSize.getWidth() - margin.left - margin.right;
        //     const pageHeight = documentPDF.internal.pageSize.getHeight() - margin.top - margin.bottom;

        //     let imgWidth = (canvas.width / scale) * 0.264583; // Convert pixels to mm (1px = 0.264583mm)
        //     let imgHeight = (canvas.height / scale) * 0.264583; // Scale and convert to mm
        //     // Scale image to fit within page dimensions while maintaining aspect ratio
            
        //     const ratio = pageWidth / imgWidth;
        //     imgWidth = pageWidth; // Fit to page width
        //     imgHeight *= ratio; // Adjust height to maintain aspect ratio
            

        //     // if (imgHeight > pageHeight) {
        //     //     const newRatio = pageHeight / imgHeight;
        //     //     imgHeight = pageHeight; // Fit to page height
        //     //     // imgWidth *= newRatio; // Adjust width to maintain aspect ratio
        //     // }

           
        //     let heightLeft = imgHeight;

        //     // Split image across pages if needed
        //     while (heightLeft > 0) {
        //         let pageHeightToUse = heightLeft > pageHeight ? pageHeight : heightLeft;
        //         documentPDF.addImage(imgPdf, 'PNG', margin.left, margin.top, imgWidth, pageHeightToUse);

        //         heightLeft -= pageHeight;
        //         if (heightLeft > 0) {
        //             documentPDF.addPage();
        //             margin.top = 10; // Reset Y position for the new page
        //         }
        //     }

        const newPDF = async () => {
            const input = contentRef.current;
            if (!input) throw new Error('Invalid content reference');

            const originalStyle = contentRef.current.getAttribute('style');
            contentRef.current.style.height = 'auto';
            contentRef.current.style.overflow = 'visible';

            const scale = 2;

            const canvas = await html2canvas(input, {
                scrollY: -window.scrollY,
                scale: scale,
            });

            contentRef.current.setAttribute('style', originalStyle);
            const imgPdf = canvas.toDataURL('image/png');
            const documentPDF = new jsPDF('p', 'mm', 'a4');

            const margin = { top: 10, left: 10, right: 10, bottom: 10 };
            
            const pageWidth = documentPDF.internal.pageSize.getWidth() - margin.left - margin.right;
            const pageHeight = documentPDF.internal.pageSize.getHeight() - margin.top - margin.bottom;

            let imgWidth = (canvas.width / scale) * 0.264583; // Convert pixels to mm
            let imgHeight = (canvas.height / scale) * 0.264583; // Convert pixels to mm

            // Fit image to page width while maintaining aspect ratio
            const ratio = pageWidth / imgWidth;
            imgWidth = pageWidth; // Fit to page width
            imgHeight = imgHeight * ratio; // Adjust height to maintain aspect ratio

            let positionY = 0; // Initial Y position

            // Check if image height is greater than page height to handle content spanning multiple pages
            if (imgHeight > pageHeight) {
                // Determine the number of pages needed
                const numPages = Math.ceil(imgHeight / pageHeight);

                for (let i = 0; i < numPages; i++) {
                    // Add new page after the first iteration
                    if (i > 0) {
                        documentPDF.addPage();
                        positionY = 0; // Reset position for new page
                    }

                    // Calculate the height of the content to be added on the current page
                    let heightToDraw = Math.min(imgHeight - (i * pageHeight), pageHeight);
                    // Adjust source height to match the drawn height, maintaining aspect ratio
                    let srcHeight = heightToDraw * (canvas.height / imgHeight);
                    // Use a portion of the image based on the current page
                    documentPDF.addImage(imgPdf, 'PNG', margin.left, margin.top - positionY, imgWidth, imgHeight, '', 'FAST', 0);

                    // Move position for next iteration/page
                    positionY += heightToDraw;
                }
            } else {
                // If the image fits on one page, add it directly
                documentPDF.addImage(imgPdf, 'PNG', margin.left, margin.top, imgWidth, imgHeight);
            }
           
       documentPDF.save('New Pdf.pdf')
    }
        newPDF()
        
    } catch (error) {
        console.error('Error downloading the data to pdf:', error)
    } 
}