import {jsPDF} from 'jspdf'  
import html2canvas from 'html2canvas'


export const downloadToPDF = (contentRef) =>{
    try {
        const newPDF = async () => {
        const input = contentRef.current
        if(!input) throw new Error('Invalid content reference')
        const canvas = await html2canvas(input)
        const imgPdf = canvas.toDataURL('image/png')
        const documentPDF = new jsPDF()

        const pageWidth = documentPDF.internal.pageSize.getWidth();
        const pageHeight = documentPDF.internal.pageSize.getHeight();
        const xPosition = 10; // Adjust as necessary
        const yPosition = 20; // Adjust as necessary
        const imgWidth = 180; // Example width
        const imgHeight = 120;

        if (xPosition + imgWidth > pageWidth) {
            imgHeight *= (pageWidth - xPosition) / imgWidth;
            imgWidth = pageWidth - xPosition;
        }

        if (yPosition + imgHeight > pageHeight) {
            const availableHeight = pageHeight - yPosition
            const aspectRatio = imgWidth / imgHeight
            imgHeight = availableHeight;
            imgWidth = imgHeight * aspectRatio
        }
        

        documentPDF.addImage(imgPdf, 'PNG', xPosition, yPosition, imgWidth, imgHeight)
        documentPDF.save('New Pdf.pdf')
        }
        newPDF()
        
    } catch (error) {
        console.error('Error downloading the data to pdf:', error)
    } 
}