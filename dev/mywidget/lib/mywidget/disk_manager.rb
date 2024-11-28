module Mywidget
  class DiskManager
    def available_disk_space
      output = `df -h /`
      lines = output.split("\n")
      header, data = lines[0], lines[1]
      filesystem, size, used, available, percent, mount = data.split(/\s+/)
      available
    end

  end
end