export const errorSend = (setLoading, setErrorSendEmail) => {
    setTimeout(() => {
        setLoading(false)
        setErrorSendEmail(true);
    }, 1500)
}