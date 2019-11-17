-- Populate tax table
INSERT INTO `tax` (`tax_id`, `tax_type`, `tax_percentage`) VALUES
       (1, 'Sales Tax at 8.5%', 8.50),
       (2, 'No Tax',            0.00);

-- Populate shipping_region table
INSERT INTO `shipping_region` (`shipping_region_id`, `shipping_region`) VALUES
       (1, 'Please Select') , (2, 'US / Canada'),
       (3, 'Europe'),         (4, 'Rest of World');
