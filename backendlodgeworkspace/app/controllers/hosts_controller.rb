class HostsController < ApplicationController

    def index
        @hosts = Host.all 
        render json: @hosts, only: [:id, :name, :age, :location, :rental, :max_days, :price, :rental_img1, :rental_img2]
    end
    def show
        @host = Host.find(params[:id])
        render json: @hosts, only: [:id, :name, :age, :location, :rental, :max_days, :price, :rental_img1, :rental_img2]
    end
end
