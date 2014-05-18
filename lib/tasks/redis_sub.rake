namespace :redis_sub do
  desc "TODO"
  task sub: :environment do
  	puts "HEllo"
    $redis.subscribe("my_callback") do |on|
      on.message do |channel, message|
        puts "!!!!!!!!!!!!!!!!!!!!"+message.to_s
      end
    end
  end
end
