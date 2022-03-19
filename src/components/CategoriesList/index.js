import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { connect } from 'react-redux'; // a function that connects a function to a store
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { addCategory, changeActive, addProduct } from '../../store/categories'


function CategoriesList(props) {
  let categories = props.categories;
  let addCategory = props.addCategory;
  let changeActive = props.changeActive;
  let addProduct = props.addProduct;

  console.log(props)
  console.log(categories)

  const [open, setDrawer] = useState(false)

  function toggleDrawer() {
    setDrawer(!open)
  }

  function toggleActive() {
    changeActive("facing the porcelin")
  }

  function createProduct() {
    addProduct('armpit')
  }

  function createCategory() {
    addCategory('all around')
  }

  return (
    <div>
      <Button onClick={toggleDrawer}>ToggleCategories</Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          {categories.map(category => (
            <ListItem key={category}>
              <ListItemButton>
                <ListItemText primary={category} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <ListItemButton onClick={toggleActive}>
              <ListItemText primary="changeActive" />
            </ListItemButton>
            <ListItemButton onClick={createProduct}>
              <ListItemText primary="addProduct" />
            </ListItemButton>
            <ListItemButton onClick={createCategory}>
              <ListItemText primary="addCategory" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

    </div>
  )
}

//function to map store values to component props

const mapStateToProps = (state) => {
  return {
    categories: state.index.categories,
    products: state.index.products,
    activeCategory: state.index.activeCategory
  }
}

const mapDispatchToProps = {
  addProduct,
  changeActive,
  addCategory,
}
// connect return a higher order function or component that takes in another component
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList)