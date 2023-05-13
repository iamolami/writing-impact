const styles = {
  grootFrame: {
    zIndex: "3999999",
    position: "fixed",
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: 'none',
    fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
  },
  grootFrameOpen: {
    zIndex: "3999999",
    position: "fixed",
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: 'block',
    fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
  },
  searchAbsolute: {
    position: "absolute",
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    overflow: "hidden",
    backdropFilter: 'blur(2px)',
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.1))'
  },
  searchContainer: {
    display: 'block',
    position: 'relative',
    paddingTop: '5rem',
    width: '100uw',
    // height: '100vh',
    zIndex: '50',
  },
  searchWrapper: {
    maxWidth: '35rem',
    width: '100%',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1),0 8px 10px -6px rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(255,255,255,1)',
    opacity: '1',
    borderRadius: '10px',
    margin: 'auto',
    position: 'relative',
  },
  searchBox: {
    display: 'flex',
    padding: '1.2rem',
    backgroundColor: 'rgba(255,255,255,1)',
    opacity: '1',
    alignItems: 'center',
    position: 'relative',
    zIndex: '10',
    borderRadius: '0.8rem'
  },
  searchFlex: {
    display: 'flex',
    alignItems: 'center',
    width: '1.6rem',
    height: '1.6rem',
    justifyContent: 'center',
    marginRight: '1.2rem',
  },
  searchInput: {
    outline: '2px solid transparent',
    fontSize: '13px',
    paddingLeft: '1.2rem',
    paddingTop: '1.2rem',
    paddingBottom: '1.2rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    flexGrow: '1',
    marginLeft: '-1.2rem',
    marginTop: '-2rem',
    marginBottom: '-2rem',
    border: 'none'
  },
  searchBtn: {
    opacity: '1',
    color: 'rgba(115, 115, 115, 1)',
    fontSize: '13px',
    marginLeft: '1.2rem',
    cursor: 'pointer',
    backgroundColor: 'initial',
    backgroundImage: 'none',
    border: 'none'
  },
  searchResultBox: {
    maxHeight: '72vh',
    marginTop: '-1px',
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  searchResult: {
    padding: '1rem',
    opacity: '1',
    borderTop: '3px solid rgba(229, 229, 229, 1)',
  },
  searchResultMain: {
    color: 'rgba(163, 163, 163, 1)',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: '12px',
    marginBottom: '5px',
    fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
  },
  searchResultList: {
    padding: '3px 3rem',
    margin: '0 -2.8rem',
    cursor: 'pointer',
  },
  searchResultTitle: {
    opacity: '1',
    color: 'rgba(38, 38, 38, 1)',
    lineHeight: '1.25',
    fontWeight: '500',
    fontSize: '13.3px',
    fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
  },
  searchResultSpan: {
    fontWeight: '700',
    color: 'rgba(23, 23, 23, 1)',
  },
  searchResultText: {
    opacity: '1',
    color: 'rgba(163, 163, 163, 1)',
    lineHeight: '1.5',
    fontWeight: '500',
    fontSize: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginTop: '-10px',
    marginBottom: '0',
    fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
  },
  searchResultBold: {
    fontWeight: '700',
  },
  searchResultMore: {
    opacity: '1',
    color: '#fff',
    fontWeight: '600',
    fontSize: '13.3px',
    padding: '1rem',
    backgroundColor: '#002D62',
    borderTopWidth: '1px',
    borderRadius: '0.4rem',
    width: '100%',
    margin: '1.2rem 0',
    cursor: 'pointer',
    outline: 'none',
    backgroundImage: 'none',
    fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
  }
};

export default styles;
