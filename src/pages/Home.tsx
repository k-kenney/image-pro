import ImageGallery from "../components/ImageGallery"
import UploadForm from "../components/UploadForm"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <UploadForm />
      <ImageGallery />
    </div>
  )
}

export default Home
