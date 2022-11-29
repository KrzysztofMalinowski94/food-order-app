import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const FoodSummary = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <section
    className={classes.summary}
      {...otherProps}
    >
      <h2 >Delivered to you</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse laudantium autem dolorum illum recusandae voluptate. Placeat a aspernatur voluptatem magnam illo, temporibus perferendis quia animi saepe repellat dolores beatae accusantium?
      Voluptatum deserunt, quo aperiam quos cum sit rerum ducimus placeat, culpa dicta debitis vel fugit veritatis ipsum quaerat repudiandae enim voluptatem est error saepe! Id facere repellat error veniam deleniti?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse laudantium autem dolorum illum recusandae voluptate. Placeat a aspernatur voluptatem magnam illo, temporibus perferendis quia animi saepe repellat dolores beatae accusantium?
      Voluptatum deserunt, quo aperiam quos cum sit rerum ducimus placeat, culpa dicta debitis vel fugit veritatis ipsum quaerat repudiandae enim voluptatem est error saepe! Id facere repellat error veniam deleniti?</p>
    </section>
  )
}

FoodSummary.propTypes = {
  className: PropTypes.string
}

export default FoodSummary
