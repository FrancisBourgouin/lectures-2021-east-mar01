require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Cars", type: :feature, js:true do
  # pending "add some scenarios (or delete) #{__FILE__}"

  before :each do
    @car1 = Car.create!(
      make: Make.create!(make: 'Toyota'),
      model: Model.create!(model: 'Prius'),
      style: Style.create!(body_style: 'Extended Cab Pickup'),
      trim: Trim.create!(trim: 'XL'),
      year: 1985,
      color: 'Coriander'
    )

    @car2 = Car.create!(
      make: Make.create!(make: 'Toyota'),
      model: Model.create!(model: 'Prius'),
      style: Style.create!(body_style: 'Extended Cab Pickup'),
      trim: Trim.create!(trim: 'Esi'),
      year: 2000,
      color: 'Lavender'
    )

    @car3 = Car.create!(
      make: Make.create!(make: 'Doge'),
      model: Model.create!(model: 'Coin'),
      style: Style.create!(body_style: 'Hatchback'),
      trim: Trim.create!(trim: 'XLE'),
      year: 1975,
      color: 'Purple'
    )
  end


  scenario 'display the cars page' do |variable|
    visit cars_path
    save_screenshot('cars_page.png')
    expect(page).to have_text('Super cars! (guitar solo)')
  end

  scenario 'display the cars page single make' do |variable|
    visit cars_path
    save_screenshot('cars_page_make.png')
    expect(page).to have_text('Make: Doge')
  end

  scenario 'make sure the make is inside details' do |variable|
    visit cars_path
    save_screenshot('cars_page_make_toyo.png')
    # within '.cars' do
    expect(page).to have_text('Make: Toyota', count: 2)
    # end
  end

  scenario 'view all cars then visit the specific car' do
    visit cars_path
    save_screenshot('cars_page_visit_part1.png')
    first(:link, 'Click here to view more').click
    save_screenshot('cars_page_visit_part2.png')
    expect(page).to have_text('Extended Cab Pickup')
  end 
end
