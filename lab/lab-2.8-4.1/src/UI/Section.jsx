const Section = (props) => {
  return (
    <section style={{width: '600px'}} className={props.className}>
      {props.children}
    </section>
  )
}

export default Section
