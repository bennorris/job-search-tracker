class CompaniesController < ApplicationController

  def create
    @company = Company.find_or_create_by(name: params['_json'][0])
    @company.website = params['_json'][1]
    @company.description = params['_json'][2]
    @company.notes = params['_json'][3]
    @company.showme = 'true'
    @company.save

  end

  def show
    @companies = Company.all

    respond_to do |f|
      f.json {render json: @companies}
    end
  end

end
