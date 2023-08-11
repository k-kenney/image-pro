import { ref } from 'firebase/storage'
import { useState } from "react"
import { storage } from '../firebase/config'
import { v4 as uuidv4 } from 'uuid';

const useStorage = () => {
  const [progress, setProgress] = useState<number>(0)
  const [error, setError] = useState<Error | null>(null)
  const [url, setUrl] = useState<string | null>(null)

  const startUpload = (file: File) => {
    if(!file) {
      return
    }
    const fileId = uuidv4()
    const formatFile = file.type.split('/')[1]
    console.log(formatFile)

    const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  }

  return {
    progress, error, url, startUpload
  }
}

export default useStorage
