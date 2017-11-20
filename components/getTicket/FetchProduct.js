export const fetchProduct = (token) => {
    const { status, data } = await api.get(
      `${api.SERVER}/product?token=${this.props.auth.token}`
    )
    this.setState({ live: data.lives.data })
  }