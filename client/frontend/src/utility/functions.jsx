
export function Logout(navigate){
    localStorage.removeItem('Token')
    navigate('/')
}
export function DecodeJWT(token) {
    try {
      if (!token) {
        return null;
      }
      const base64Url = token.split('.')[1]; 
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      const decoded = JSON.parse(jsonPayload);
      console.log('Decoded JWT:', decoded);
      return decoded.email || null;  
    } catch (err) {
  console.log(err)
    }
  }
  