export const fileUpload = async (file) => {
  if (!file) {
    throw new Error('No file to upload')
  }
  const cloudURL = 'https://api.cloudinary.com/v1_1/ddkefirzm/image/upload'
  const formData = new FormData()

  formData.append('upload_preset', 'journal-app')
  formData.append('file', file)

  try {
    const res = await fetch(cloudURL, {
      method: 'POST',
      body: formData
    })
    if (!res.ok) {
      throw new Error('Error uploading file')
    }
    const cloudRes = await res.json()
    return cloudRes.secure_url
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}
