const styles = {
  grootMenu: {
    zIndex: "3",
    position: "fixed",
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "none",
    border: '2px solid #e2e4e8',
    borderWidth: '2px 0',
    backgroundColor: '#fff',
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  },
  grootMenuOpen: {
    zIndex: "3",
    position: "fixed",
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "block",
    border: '2px solid #e2e4e8',
    borderWidth: '2px 0',
    backgroundColor: '#fff',
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  },
  navigation: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuUl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    lineHeight: '1.4',
    listStyle: 'none',
    marginTop: '40px',
    padding: '0'
  },
  menuList: {
    opacity: '1',
    transform: 'translateY(4px)',
    transition: 'transform .2s,opacity .2s',
    listStyle: 'none',
    margin: '0',
    padding: '0'
  },
  menuLink: {
    fontSize: '1.5rem',
    fontWeight: '600',
    textTransform: 'none',
    textDecoration: 'none',
    color: '#000',
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  },
  menuDropdown: {
    fontSize: '1.3rem',
    fontWeight: '600',
    textTransform: 'none',
    textDecoration: 'none',
    color: '#000',
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  },
  menuIcons: {
    fontSize: '16px',
    marginLeft: '5px',
    cursor: 'pointer'
  },
  menuActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    lineHeight: '1',
    marginTop: '30px'
  },
  menuSignIn: {
    fontSize: '1.3rem',
    fontWeight: '400',
    textTransform: 'none',
    textDecoration: 'none',
    color: '#000',
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  },
  menuBtn: {
    width: '100%',
    alignItems: 'center',
    background: '#002D62',
    borderRadius: '48px',
    color: '#fff',
    display: 'inline-flex',
    fontSize: '1.3rem',
    fontWeight: '600',
    height: '44px',
    justifyContent: 'center',
    letterSpacing: '-0.005em',
    padding: '8px 150px',
    transition: 'all 0.4s ease-in-out',
    border: 'none',
    outline: 'none',
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  },
  mtop: {
    top: '5%'
  },
  openPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    lineHeight: '1.2',
    listStyle: 'none',
    paddingLeft: '15px',
    visibility: 'visible',
    opacity: '1',
    transform: 'translateY(10px)',
    marginBottom: '10px',
    transformOrigin: 'top',
    transition: 'transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease'
  },
  closePanel: {
    visibility: 'hidden',
    opacity: '0',
    height: '0',
    width: '0'
  }
};

export default styles;
