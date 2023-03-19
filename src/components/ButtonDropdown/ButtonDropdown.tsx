import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ButtonDropdown.module.scss';

export type ButtonDropdownProps = {
  title: string;
  items: string[];
}

const ButtonDropdown: React.FC<ButtonDropdownProps> = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <Dropdown
      show={open}
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <Dropdown.Toggle to='' as={Link} variant="primary">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item key={index}>{item}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ButtonDropdown;