require 'pry'

class JobsController < ApplicationController

  def create
    @job = Job.new
    @company = Company.find_or_create_by(name: params['_json'][0])
    @job.company = @company
    @job.title = params['_json'][1]
    @job.description = params['_json'][2]
    @job.link = params['_json'][3]
    @job.applied = params['_json'][4]
    @job.save
  end

  def show
    @jobs = Job.all
    respond_to do |f|
      f.json { render json: @jobs}
    end
  end



end
